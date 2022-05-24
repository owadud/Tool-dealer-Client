/* This example requires Tailwind CSS v2.0+ */
import { PaperClipIcon } from '@heroicons/react/solid'

const MyPortfolio = () => {
    return (
        <div className="bg-white shadow overflow-hidden sm:rounded-lg">
            <div className="px-4 py-5 sm:px-6">
                <h3 className="text-lg leading-6 font-medium text-gray-900">My Information</h3>
                <p className="mt-1 max-w-2xl text-sm text-gray-500">Personal details and application.</p>
            </div>
            <div className="border-t border-gray-200">
                <dl>
                    <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt className="text-sm font-medium text-gray-500">Full name</dt>
                        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">A. Owadud Bhuiyan</dd>
                    </div>
                    <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt className="text-sm font-medium text-gray-500">Application for</dt>
                        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">React Developer</dd> 
                    </div>
                    <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt className="text-sm font-medium text-gray-500">Email address</dt>
                        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">owadud.lsb@gmail.com</dd>
                    </div>
                    <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt className="text-sm font-medium text-gray-500">Education</dt>
                        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">CSE,AIUB</dd>
                    </div>
                    <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt className="text-sm font-medium text-gray-500">Salary expectation</dt>
                        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">20,000</dd>
                    </div>
                    <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt className="text-sm font-medium text-gray-500">About</dt>
                        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                        I am looking for a job or research opportunity that will allow me to utilize my problem-solving skills and I am carrying three Months internship as a font-end Web Developer.
                        </dd>
                    </div>
                    <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt className="text-sm font-medium text-gray-500">Attachments Demo Project</dt>
                        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                            <ul role="list" className="border border-gray-200 rounded-md divide-y divide-gray-200">
                                <li className="pl-3 pr-4 py-3 flex items-center justify-between text-sm">
                                    <div className="w-0 flex-1 flex items-center">
                                        <PaperClipIcon className="flex-shrink-0 h-5 w-5 text-gray-400" aria-hidden="true" />
                                        <span className="ml-2 flex-1 w-0 truncate">Linkedin Profile</span>
                                    </div>
                                    <div className="ml-4 flex-shrink-0">
                                        <a href="https://www.linkedin.com/in/aowadudbhuiyan" target="_bank" className="font-medium text-indigo-600 hover:text-indigo-500">
                                            Click-here
                                        </a>
                                    </div>
                                </li>
                                <li className="pl-3 pr-4 py-3 flex items-center justify-between text-sm">
                                    <div className="w-0 flex-1 flex items-center">
                                        <PaperClipIcon className="flex-shrink-0 h-5 w-5 text-gray-400" aria-hidden="true" />
                                        <span className="ml-2 flex-1 w-0 truncate">Cricket News</span>
                                    </div>
                                    <div className="ml-4 flex-shrink-0">
                                        <a href="https://owadud.github.io/Sports-News" target="_bank" className="font-medium text-indigo-600 hover:text-indigo-700 mr-2">
                                            Live
                                        </a>
                                        <a href="https://owadud.github.io/Sports-News" target="_bank" className="font-medium text-indigo-600 hover:text-indigo-700">
                                            Code
                                        </a>
                                    </div>
                                </li>
                                <li className="pl-3 pr-4 py-3 flex items-center justify-between text-sm">
                                    <div className="w-0 flex-1 flex items-center">
                                        <PaperClipIcon className="flex-shrink-0 h-5 w-5 text-gray-400" aria-hidden="true" />
                                        <span className="ml-2 flex-1 w-0 truncate">Hire Employee</span>
                                    </div>
                                    <div className="ml-4 flex-shrink-0">
                                        <a href="https://owadud.github.io/Provide-employees/" target="_bank" className="font-medium text-indigo-600 hover:text-indigo-500 mr-2">
                                            Live
                                        </a>
                                        <a href="https://github.com/owadud/Provide-employees" target="_bank" className="font-medium text-indigo-600 hover:text-indigo-700">
                                            Code
                                        </a>
                                    </div>
                                </li>

                                <li className="pl-3 pr-4 py-3 flex items-center justify-between text-sm">
                                    <div className="w-0 flex-1 flex items-center">
                                        <PaperClipIcon className="flex-shrink-0 h-5 w-5 text-gray-400" aria-hidden="true" />
                                        <span className="ml-2 flex-1 w-0 truncate">Personal Portfolio</span>
                                    </div>
                                    <div className="ml-4 flex-shrink-0">
                                        <a href="https://owadud.github.io" target="_bank" className="font-medium text-indigo-600 hover:text-indigo-500 mr-2">
                                            Live
                                        </a>
                                        <a href="https://github.com/owadud/portfolio" target="_bank" className="font-medium text-indigo-600 hover:text-indigo-700">
                                            Code
                                        </a>
                                    </div>
                                </li>
                            </ul>
                        </dd>
                    </div>
                </dl>
            </div>
        </div>
    )
}
export default MyPortfolio;