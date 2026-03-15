import ExploreBtn from "@/components/ExploreBtn";
import Eventcard from "@/components/Eventcard";
import { IEvent } from "@/database";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

const Page = async () => {
    const response = await fetch(`${BASE_URL}/api/events`);
    const {events} = await response.json();

  return (
    <section>
      <h1 className="text-center">The hub of every Torq event <br />Welcome to the world of TORQ</h1>
      <p className="text-center mt-5">Hackathons, Meetups, Blockchain Event </p>
      <ExploreBtn />

      <div className="mt-20 space-y-9">
        <h3>Featured Events</h3>

        <ul className="events">
          {events && events.length >0 && events.map((event: IEvent) => (
              <li key={event.title} className="list-none">
                  <Eventcard {...event} />
              </li>
          ))}
        </ul>
        
      </div>

    </section>
  )
}
export default Page;