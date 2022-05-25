import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <>
            <div className="container mx-auto bg-gray-800">
                <footer class="footer py-10 px-10 justify-between text-white">
                    <div>
                        <span class="footer-title">Services</span>
                        <Link to="/" class="link link-hover">
                            Branding
                        </Link>
                        <Link to="/" class="link link-hover">
                            Design
                        </Link>
                        <Link to="/" class="link link-hover">
                            Marketing
                        </Link>
                        <Link to="/" class="link link-hover">
                            Advertisement
                        </Link>
                    </div>
                    <div>
                        <span class="footer-title">Company</span>
                        <Link to="/" class="link link-hover">
                            About us
                        </Link>
                        <Link to="/" class="link link-hover">
                            Contact
                        </Link>
                        <Link to="/" class="link link-hover">
                            Jobs
                        </Link>
                        <Link to="/" class="link link-hover">
                            Press kit
                        </Link>
                    </div>
                    <div>
                        <span class="footer-title">Legal</span>
                        <Link to="/" class="link link-hover">
                            Terms of use
                        </Link>
                        <Link to="/" class="link link-hover">
                            Privacy policy
                        </Link>
                        <Link to="/" class="link link-hover">
                            Cookie policy
                        </Link>
                    </div>
                    <div>
                        <span class="footer-title">Newsletter</span>
                        <div class="form-control w-80">
                            <label class="label">
                                <span class="label-text">
                                    Enter your email address
                                </span>
                            </label>
                            <div class="relative">
                                <input
                                    type="text"
                                    placeholder="username@site.com"
                                    class="input  text-gray-800 input-bordered w-full pr-16"
                                />
                                <button class="btn btn-accent absolute top-0 right-0 rounded-l-none">
                                    Subscribe
                                </button>
                            </div>
                        </div>
                    </div>
                </footer>

                <div className="border-t border-solid border-gray-900 mt-4 py-4">
                    <div className="container px-4 mx-auto">
                        <div className="md:flex md:-mx-4 md:items-center">
                            <div className="md:flex-1 md:px-4 text-center md:text-left">
                                <p className="text-white">
                                    &copy; 2022
                                    <strong> ELECTRO MENUFECTURER</strong>
                                </p>
                            </div>
                            <div className="md:flex-1 md:px-4 text-center md:text-right">
                                <Link
                                    to="/"
                                    className="py-2 px-4 text-white inline-block hover:underline"
                                >
                                    Terms of Service
                                </Link>
                                <Link
                                    to="/"
                                    className="py-2 px-4 text-white inline-block hover:underline"
                                >
                                    Privacy Policy
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Footer;
