import EventDetails from "@/components/EventDetails";
 
const EventDetailsPage = async ({ params }: { params: Promise<{ slug: string }> }) => {
    const { slug } = await params;
 
    return (
        <main>
            <EventDetails params={slug} />
        </main>
    );
}
 
export default EventDetailsPage;
 