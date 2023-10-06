import scala.concurrent.duration._

import scala.util.Random

import io.gatling.core.Predef._
import io.gatling.http.Predef._


class BenchmarkSimulation extends Simulation {

  val httpProtocol = http
    .baseUrl("http://localhost:8080")
    .userAgentHeader("Marco Rosner")

  val creatingPeople = scenario("Creating people")
    .feed(tsv("people-payloads.tsv").circular())
    .exec(
      http("create")
      .post("/pessoas").body(StringBody("#{payload}"))
      .header("content-type", "application/json")
      .check(status.in(201))
    )

  val searchPeople = scenario("Search people")
    .feed(tsv("termos-busca.tsv").circular())
    .exec(
      http("Search People")
      .get("/pessoas?t=#{t}")
    )

  val invalidSearch = scenario("Invalid search")
    .exec(
      http("Invalid search")
      .get("/pessoas")
      .check(status.is(400))
    )

  setUp(
    creatingPeople.inject(
      constantUsersPerSec(2).during(10.seconds), // warm up
      constantUsersPerSec(5).during(15.seconds).randomized, // are you ready?

      rampUsersPerSec(6).to(300).during(3.minutes) // lezzz go!!!
    ),
    searchPeople.inject(
      constantUsersPerSec(2).during(25.seconds), // warm up

      rampUsersPerSec(6).to(50).during(3.minutes) // lezzz go!!!
    ),
    invalidSearch.inject(
      constantUsersPerSec(2).during(25.seconds), // warm up

      rampUsersPerSec(6).to(20).during(3.minutes) // lezzz go!!!
    )
  ).protocols(httpProtocol)
}