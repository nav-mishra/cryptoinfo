import classNames from 'classnames'
import React from 'react'

const Timeline = () => {
    var timeline = [
        {title: "May 22, 2021", details: "Ape #1798 is purchased for .46 ETH ($1,068)"},
        {title: "May 23, 2021", details: " @JenkinsTheValet Twitter is created with an origin story"},
        {title: "June 14, 2021", details: " They win a Bored Ape Yacht Club Community Grant"},
        {title: "June 2021", details: " Advisory team now includes Andy8052, GMoney, Adam Brotman, Jacob Martin (TheNFTAttorney), Drew Austin, and Josh Ong. "},
        {title: "August 4, 2021", details: " The Writer’s Room launches, selling out of all 6,942 NFTs in 6 minutes"},
        {title: "September 22, 2021", details: " Announced partnership with CAA for representation across books, film, TV, podcasts, and more. Together, they would be bringing Jenkins’ debut novel to market in collaboration with a New York Times bestselling author.See this Forbes article from Cathy Hackl."},
        {title: "November 2, 2021", details: "  Author announced as Neil Strauss. NYC community event (announcement, covered by Input Mag) "},
        {title: "November 14, 2021", details: " 50% of all Net Profits from Book 1 will flow back to licensors (announcement)."},
        {title: "November 28, 2021", details: " The Writer’s Room member portal, was launched where voting on all plot decisions and licensing your own IP to the book occurs."},
        {title: "December 21, 2021", details: " Discord was hacked. Those who were hacked were refunded. (announcement)."},
        {title: "January 3, 2022", details: " Licensing closed, with 4,075 Apes/Mutants licensed to Book 1, all receiving royalties for leveraging their IP."},
        {title: "January 4, 2022", details: " Book 1 writing begins with this summary of what had been voted on so far"},
        {title: "January 31, 2022", details: " Roadmap 2.0 is announced (announcement) with details of what holders of the Book1 NFT can do and what the content universe looks like."},
    ]


    return (
        <section className="container  py-4 mx-auto flex flex-wrap">

            <div className="lg:w-2/5 md:w-1/2 md:pr-10 md:py-6">
                {timeline.map((x, index) =>
                    <div className={classNames("flex relative", index == timeline.length - 1 ? "" : "pb-6")} key={index}>
                        <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                            <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                        </div>
                        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                            </svg>
                        </div>
                        <div className="flex-grow pl-4">
                            <h2 className="font-medium title-font text-sm  mb-1 tracking-wider">{x.title}</h2>
                            <p className="leading-relaxed">{x.details}</p>
                        </div>
                    </div>)}
            </div>
        </section>
    )
}

export default Timeline