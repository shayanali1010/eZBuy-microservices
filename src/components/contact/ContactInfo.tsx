import Image from "next/image"

const ContactInfo = () => {
  return (
    <div className="space-y-8">
      {/* US HQ */}
      <div className="bg-gray-50 p-6">
        <h3 className="text-sm font-medium text-gray-500 mb-4">UNITED STATES (HEADQUARTERS)</h3>
        <div className="space-y-2 text-sm">
          <p className="text-gray-900">152 Thatcher Road St, Mahattan, 10463, US</p>
          <p className="text-gray-900">(+025) 3886 25 16</p>
          <a href="mailto:hello@swattechmart.com" className="text-red-500 underline">
            hello@swattechmart.com
          </a>
        </div>
      </div>

      {/* UK Branch */}
      <div className="bg-gray-50 p-6">
        <h3 className="text-sm font-medium text-gray-500 mb-4">UNITED KINGDOM (BRANCH)</h3>
        <div className="space-y-2 text-sm">
          <p className="text-gray-900">12 Buckingham Rd, Thornthwaite, HG3 4TY, UK</p>
          <p className="text-gray-900">(+718) 895-5350</p>
          <a href="mailto:contact@swattechmart.co.uk" className="text-red-500 underline">
            contact@swattechmart.co.uk
          </a>
        </div>
      </div>

      {/* Social */}
      <div className="flex space-x-4">
        <a href="#" className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300">
          <svg className="w-4 h-4 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
            <path d="M23.953 4.57a10 10 0 01-2.825.775..." />
          </svg>
        </a>
        {/* baaki icons same... */}
      </div>

      {/* Image */}
      <div className="mt-8">
        <Image
          src="/assets/contact.png.png"
          alt="Person typing on laptop"
          width={400}
          height={300}
          className="w-full h-auto rounded-lg"
        />
      </div>
    </div>
  )
}

export default ContactInfo
