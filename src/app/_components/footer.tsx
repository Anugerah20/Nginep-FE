import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white border border-t border-orange-500">
      <div className="w-full max-w-screen-xl mx-auto py-10 md:py-16 px-4">
        <div className="grid md:grid-cols-3 gap-7">
          <div>
            <Link href="/" className="text-3xl text-orange-600 font-bold">
              🏨Nginep.
            </Link>
            <p className="text-gray-900 mb-5">
              Your trusted place to find comfort and relaxation. Book your stay,
              enjoy your moment, and make every trip unforgettable.
            </p>
          </div>
          <div>
            <div className="flex gap-20">
              <div className="flex-1 md:flex-none">
                <h4 className="text-xl font-semibold text-orange-500 mb-8">
                  Links
                </h4>
                <ul className="text-gray-800 list-item space-y-5">
                  <li>
                    <Link href="#">Home</Link>
                  </li>
                  <li>
                    <Link href="#">About</Link>
                  </li>
                  <li>
                    <Link href="#">Room</Link>
                  </li>
                  <li>
                    <Link href="#">Contact</Link>
                  </li>
                </ul>
              </div>
              <div className="flex-1 md:flex-none">
                <h4 className="text-xl font-semibold text-orange-500 mb-8">
                  Legal
                </h4>
                <ul className="text-gray-800 list-item space-y-5">
                  <li>
                    <Link href="#">Legal</Link>
                  </li>
                  <li>
                    <Link href="#">Term & Condition</Link>
                  </li>
                  <li>
                    <Link href="#">Payment</Link>
                  </li>
                  <li>
                    <Link href="#">Privacy Policy</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div>
            <h4 className="text-xl font-semibold text-orange-500 mb-8">
              Stay Update
            </h4>
            <p className="text-gray-800">
              Dont miss out on special deals and travel tips! Subscribe to get
              the latest updates and offers from Nginep.
            </p>
            <form action="" className="mt-5">
              <div className="mb-5">
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email address"
                  className="w-full p-3 bg-orange-100 rounded-sm"
                />
              </div>
              <button className="w-full bg-orange-500 text-white hover:bg-orange-400 cursor-pointer text-white-500 font-bold text-center rounded-sm p-3">
                Send Now
              </button>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
}
