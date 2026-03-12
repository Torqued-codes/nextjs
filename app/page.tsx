import ExploreBtn from "@/components/ExploreBtn";
const Page = () => {
  return (
    <section>
      <h1 className="text-center">The hub of every Torq event <br />Welcome to the world of TORQ</h1>
      <p className="text-center mt-5">Hackathons, Meetups, Blockchain Event </p>
      <ExploreBtn />

      <div className="mt-20 space-y-9">
        <h3>Featured Events</h3>

        <ul className="events">
          {[1,2,3,4,5].map((event) => (
            <li key={event} className="event">
              Event {event}
            </li>
          ))}
        </ul>
        
      </div>

    </section>
  )
}
export default Page;