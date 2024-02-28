import Image from "next/image";

export default function Services() {
  return (
    <>
      <h2 className="text-center block my-8 text-3xl font-bold">
        Our Services
      </h2>
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 lg:gap-8">
        <div className="rounded-lg bg-gray-100 text-center p-6">
          <Image
            alt="Office"
            src="/next.svg"
            width="50"
            height="50"
            className="mx-auto mb-4"
          />
          <div className="rounded-lg font-bold pt-3">Charming stage decor</div>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam.
          </p>
        </div>
      </div>
    </>
  );
}
