export default function Faq() {
  return (
    <>
      <div className="my-8">
        <h2 className="text-center block my-8 text-3xl font-bold">
          Frequent questions
        </h2>
        <div className="grid grid-cols-1 gap-4">
          <div className="h-32 rounded-lg bg-gray-100 p-4">
            <div className="rounded-lg font-bold">
              Q: What types of events do you organize?
            </div>
            <p className="text-gray-800">
              A: We specialize in organizing a wide range of events, including
              corporate events, weddings, conferences, trade shows, private
              parties, and more. Our experienced team is adept at tailoring
              events to suit various themes and requirements.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
