import React from 'react'

const ContactPage = () => {
    return (
        <div className="mt-20">
            <div className="bg-gray-300 py-32">
                    <h1 className="text-3xl text-center font-medium ">CONTACT US</h1>
                </div>
            <div className="mx-auto max-w-7xl container mt-16">
             

                <article >
                    <section className="container mx-auto ">
                        <section>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.857108948138!2d105.77482311486182!3d21.038402685993134!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x313454b5fa9407a1%3A0xb91857b80f43fb4!2zTmfDtSA5NCBI4buTIFTDuW5nIE3huq11LCBNYWkgROG7i2NoLCBD4bqndSBHaeG6pXksIEjDoCBO4buZaSwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1602152482797!5m2!1svi!2s" width="100%" height={450} frameBorder={0} style={{ border: 0 }} allowFullScreen aria-hidden="false" tabIndex={0}>
                            </iframe>
                        </section>
                        <section className="py-20">
                            <div className="block sm:flex">
                                <div className="mx-5 sm:w-3/4">
                                    <div className="border boder-solid grid  sm:w-full ">
                                        <textarea  id="boxx" cols={30} rows={9} className="px-20" defaultValue={"\n                        "} /><br />
                                        <span id="error1" style={{ color: '#FF0000' }} />
                                    </div>
                                    <div className="grid grid-cols-1  sm:grid-cols-2">
                                        <div className="py-5">
                                            <div className="border boder-solid ">
                                                <input type="text" className="w-full py-3" placeholder="Enter your name" id="name" />
                                            </div>
                                            <span id="error2" style={{ color: '#FF0000' }} />
                                        </div>
                                        <div className="py-5">
                                            <div className="border boder-solid ">
                                                <input type="email" className="w-full py-3" placeholder="Email" id="email" />
                                            </div>
                                            <span id="error3" style={{ color: '#FF0000' }} />
                                        </div>
                                    </div>
                                    <div className="py-5">
                                        <input type="search" placeholder="Enter Subject" className="w-full py-3" id="subject" />
                                        <span id="error4" style={{ color: '#FF0000' }} />
                                    </div>
                                    <div className="my-5">
                                        <button  className="border boder-solid hover:bg-red-600 text-orange-600 py-5 px-10 " >SEND</button>
                                    </div>
                                </div>
                                <div className="w-full sm:w-1/3 mx-5 sm:ml-16">
                                    <div className="flex">
                                        <p><i className="fas fa-home" /></p>
                                        <div className="ml-5">
                                            <p className="font-bold text-xl">Buttonwood, California.</p>
                                            <span>Rosemead, CA 91770</span>
                                        </div>
                                    </div>
                                    <div className="flex my-8">
                                        <p><i className="fas fa-tablet-alt" /></p>
                                        <div className="ml-5">
                                            <p className="font-bold text-xl">+1 253 565 2365</p>
                                            <span>Mon to Fri 9am to 6pm</span>
                                        </div>
                                    </div>
                                    <div className="flex">
                                        <p><i className="fas fa-envelope" /></p>
                                        <div className="ml-5">
                                            <p className="font-bold text-xl">support@colorlib.com</p>
                                            <span>Send us your query anytime!</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </section>
                </article>
            </div>
        </div>
    )
}

export default ContactPage
