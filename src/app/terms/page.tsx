import Container from "@/components/Container";
import Section from "@/components/Section";
import { siteDetails } from "@/data/siteDetails";

const TermsPage = () => {
    return (
        <Container className="mt-12">
            <Section
                id="terms"
                title="Terms of Service"
                description="The rules and guidelines for using our services"
            >
                <div className="prose max-w-none">
                    <p className="font-semibold">Last updated: March 15, 2025</p>

                    <div className="mt-6">
                        <h2 className="text-2xl font-bold">AGREEMENT TO OUR LEGAL TERMS</h2>

                        <p className="mt-4">
                            We are HydrOxygen Labs LLC (&quot;Company,&quot; &quot;we,&quot; &quot;us,&quot; &quot;our&quot;), a company registered in Washington, United States at 522 W Riverside Ave STE N, Spokane, WA 99201, USA.
                        </p>

                        <p className="mt-4">
                            We operate the website https://checkinmore.com (the &quot;Site&quot;), the mobile application CheckIn More (the &quot;App&quot;), as well as any other related products and services that refer or link to these legal terms (the &quot;Legal Terms&quot;) (collectively, the &quot;Services&quot;).
                        </p>

                        <p className="mt-4">
                            A mobile application for automated, scheduled virtual wellness checks.
                        </p>

                        <p className="mt-4">
                            You can contact us by email at support@hydroxygenlabs.com or by mail to 522 W Riverside Ave ste n, Spokane, WA 99201, USA, Spokane, WA 99201, United States.
                        </p>

                        <p className="mt-4">
                            These Legal Terms constitute a legally binding agreement made between you, whether personally or on behalf of an entity (&quot;you&quot;), and HydrOxygen Labs LLC, concerning your access to and use of the Services. You agree that by accessing the Services, you have read, understood, and agreed to be bound by all of these Legal Terms. IF YOU DO NOT AGREE WITH ALL OF THESE LEGAL TERMS, THEN YOU ARE EXPRESSLY PROHIBITED FROM USING THE SERVICES AND YOU MUST DISCONTINUE USE IMMEDIATELY.
                        </p>

                        <p className="mt-4">
                            Supplemental terms and conditions or documents that may be posted on the Services from time to time are hereby expressly incorporated herein by reference. We reserve the right, in our sole discretion, to make changes or modifications to these Legal Terms from time to time. We will alert you about any changes by updating the &quot;Last updated&quot; date of these Legal Terms, and you waive any right to receive specific notice of each such change. It is your responsibility to periodically review these Legal Terms to stay informed of updates. You will be subject to, and will be deemed to have been made aware of and to have accepted, the changes in any revised Legal Terms by your continued use of the Services after the date such revised Legal Terms are posted.
                        </p>

                        <p className="mt-4">
                            The Services are intended for users who are at least 18 years old. Persons under the age of 18 are not permitted to use or register for the Services.
                        </p>

                        <p className="mt-4">
                            We recommend that you print a copy of these Legal Terms for your records.
                        </p>
                    </div>



                    {/* Table of Contents */}
                    <div className="mt-12" id="toc">
                        <h2 className="text-2xl font-bold mb-4">TABLE OF CONTENTS</h2>

                        <div className="space-y-3">
                            <div>
                                <a href="#services" className="text-[var(--link-text)] hover:text-[var(--link-hover)]">
                                    1. OUR SERVICES
                                </a>
                            </div>
                            <div>
                                <a href="#ip" className="text-[var(--link-text)] hover:text-[var(--link-hover)]">
                                    2. INTELLECTUAL PROPERTY RIGHTS
                                </a>
                            </div>
                            <div>
                                <a href="#userreps" className="text-[var(--link-text)] hover:text-[var(--link-hover)]">
                                    3. USER REPRESENTATIONS
                                </a>
                            </div>
                            <div>
                                <a href="#userreg" className="text-[var(--link-text)] hover:text-[var(--link-hover)]">
                                    4. USER REGISTRATION
                                </a>
                            </div>
                            <div>
                                <a href="#purchases" className="text-[var(--link-text)] hover:text-[var(--link-hover)]">
                                    5. PURCHASES AND PAYMENT
                                </a>
                            </div>
                            <div>
                                <a href="#subscriptions" className="text-[var(--link-text)] hover:text-[var(--link-hover)]">
                                    6. SUBSCRIPTIONS
                                </a>
                            </div>
                            <div>
                                <a href="#software" className="text-[var(--link-text)] hover:text-[var(--link-hover)]">
                                    7. SOFTWARE
                                </a>
                            </div>
                            <div>
                                <a href="#prohibited" className="text-[var(--link-text)] hover:text-[var(--link-hover)]">
                                    8. PROHIBITED ACTIVITIES
                                </a>
                            </div>
                            <div>
                                <a href="#ugc" className="text-[var(--link-text)] hover:text-[var(--link-hover)]">
                                    9. USER GENERATED CONTRIBUTIONS
                                </a>
                            </div>
                            <div>
                                <a href="#license" className="text-[var(--link-text)] hover:text-[var(--link-hover)]">
                                    10. CONTRIBUTION LICENSE
                                </a>
                            </div>
                            <div>
                                <a href="#mobile" className="text-[var(--link-text)] hover:text-[var(--link-hover)]">
                                    11. MOBILE APPLICATION LICENSE
                                </a>
                            </div>
                            <div>
                                <a href="#socialmedia" className="text-[var(--link-text)] hover:text-[var(--link-hover)]">
                                    12. SOCIAL MEDIA
                                </a>
                            </div>
                            <div>
                                <a href="#advertisers" className="text-[var(--link-text)] hover:text-[var(--link-hover)]">
                                    13. ADVERTISERS
                                </a>
                            </div>
                            <div>
                                <a href="#management" className="text-[var(--link-text)] hover:text-[var(--link-hover)]">
                                    14. SERVICES MANAGEMENT
                                </a>
                            </div>
                            <div>
                                <a href="#privacy" className="text-[var(--link-text)] hover:text-[var(--link-hover)]">
                                    15. PRIVACY POLICY
                                </a>
                            </div>
                            <div>
                                <a href="#terms" className="text-[var(--link-text)] hover:text-[var(--link-hover)]">
                                    16. TERM AND TERMINATION
                                </a>
                            </div>
                            <div>
                                <a href="#modifications" className="text-[var(--link-text)] hover:text-[var(--link-hover)]">
                                    17. MODIFICATIONS AND INTERRUPTIONS
                                </a>
                            </div>
                            <div>
                                <a href="#law" className="text-[var(--link-text)] hover:text-[var(--link-hover)]">
                                    18. GOVERNING LAW
                                </a>
                            </div>
                            <div>
                                <a href="#disputes" className="text-[var(--link-text)] hover:text-[var(--link-hover)]">
                                    19. DISPUTE RESOLUTION
                                </a>
                            </div>
                            <div>
                                <a href="#corrections" className="text-[var(--link-text)] hover:text-[var(--link-hover)]">
                                    20. CORRECTIONS
                                </a>
                            </div>
                            <div>
                                <a href="#disclaimer" className="text-[var(--link-text)] hover:text-[var(--link-hover)]">
                                    21. DISCLAIMER
                                </a>
                            </div>
                            <div>
                                <a href="#liability" className="text-[var(--link-text)] hover:text-[var(--link-hover)]">
                                    22. LIMITATIONS OF LIABILITY
                                </a>
                            </div>
                            <div>
                                <a href="#indemnification" className="text-[var(--link-text)] hover:text-[var(--link-hover)]">
                                    23. INDEMNIFICATION
                                </a>
                            </div>
                            <div>
                                <a href="#userdata" className="text-[var(--link-text)] hover:text-[var(--link-hover)]">
                                    24. USER DATA
                                </a>
                            </div>
                            <div>
                                <a href="#electronic" className="text-[var(--link-text)] hover:text-[var(--link-hover)]">
                                    25. ELECTRONIC COMMUNICATIONS, TRANSACTIONS, AND SIGNATURES
                                </a>
                            </div>
                            <div>
                                <a href="#sms" className="text-[var(--link-text)] hover:text-[var(--link-hover)]">
                                    26. SMS TEXT MESSAGING
                                </a>
                            </div>
                            <div>
                                <a href="#california" className="text-[var(--link-text)] hover:text-[var(--link-hover)]">
                                    27. CALIFORNIA USERS AND RESIDENTS
                                </a>
                            </div>
                            <div>
                                <a href="#misc" className="text-[var(--link-text)] hover:text-[var(--link-hover)]">
                                    28. MISCELLANEOUS
                                </a>
                            </div>
                            <div>
                                <a href="#availability" className="text-[var(--link-text)] hover:text-[var(--link-hover)]">
                                    29. SERVICE AVAILABILITY & DOWNTIME
                                </a>
                            </div>
                            <div>
                                <a href="#thirdparty" className="text-[var(--link-text)] hover:text-[var(--link-hover)]">
                                    30. THIRD-PARTY SERVICES & DEPENDENCIES
                                </a>
                            </div>
                            <div>
                                <a href="#checkins" className="text-[var(--link-text)] hover:text-[var(--link-hover)]">
                                    31. LIMITATION OF RESPONSIBILITY FOR MISSED CHECK-INS
                                </a>
                            </div>
                            <div>
                                <a href="#emergency" className="text-[var(--link-text)] hover:text-[var(--link-hover)]">
                                    32. NO EMERGENCY OR LIFE-SAFETY GUARANTEE
                                </a>
                            </div>
                            <div>
                                <a href="#contact" className="text-[var(--link-text)] hover:text-[var(--link-hover)]">
                                    33. CONTACT US
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Individual Sections */}

                    <div className="mt-12" id="services">
                        <h2 className="text-2xl font-bold mb-4">1. OUR SERVICES</h2>

                        <p className="mb-6">
                            The information provided when using the Services is not intended for distribution to or use by any person or entity in any jurisdiction or country where such distribution or use would be contrary to law or regulation or which would subject us to any registration requirement within such jurisdiction or country. Accordingly, those persons who choose to access the Services from other locations do so on their own initiative and are solely responsible for compliance with local laws, if and to the extent local laws are applicable.
                        </p>

                        <p className="mb-6">
                            The Services are not tailored to comply with industry-specific regulations (Health Insurance Portability and Accountability Act (HIPAA), Federal Information Security Management Act (FISMA), etc.), so if your interactions would be subjected to such laws, you may not use the Services. You may not use the Services in a way that would violate the Gramm-Leach-Bliley Act (GLBA).
                        </p>
                    </div>

                    <div className="mt-12" id="ip">
                        <h2 className="text-2xl font-bold mb-4">2. INTELLECTUAL PROPERTY RIGHTS</h2>

                        <div className="space-y-6">
                            <div>
                                <h3 className="text-xl font-bold mb-3">Our intellectual property</h3>
                                <p className="mb-4">
                                    We are the owner or the licensee of all intellectual property rights in our Services, including all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics in the Services (collectively, the &quot;Content&quot;), as well as the trademarks, service marks, and logos contained therein (the &quot;Marks&quot;).
                                </p>

                                <p className="mb-4">
                                    Our Content and Marks are protected by copyright and trademark laws (and various other intellectual property rights and unfair competition laws) and treaties in the United States and around the world.
                                </p>

                                <p className="mb-4">
                                    The Content and Marks are provided in or through the Services &quot;AS IS&quot; for your personal, non-commercial use only.
                                </p>
                            </div>

                            <div>
                                <h3 className="text-xl font-bold mb-3">Your use of our Services</h3>
                                <p className="mb-4">
                                    Subject to your compliance with these Legal Terms, including the &quot;<a href="#prohibited" className="text-[var(--link-text)] hover:text-[var(--link-hover)]">PROHIBITED ACTIVITIES</a>&quot; section below, we grant you a non-exclusive, non-transferable, revocable license to:
                                </p>
                                <ul className="list-disc pl-6 mb-4">
                                    <li>access the Services; and</li>
                                    <li>download or print a copy of any portion of the Content to which you have properly gained access,</li>
                                </ul>
                                <p className="mb-4">solely for your personal, non-commercial use.</p>

                                <p className="mb-4">
                                    Except as set out in this section or elsewhere in our Legal Terms, no part of the Services and no Content or Marks may be copied, reproduced, aggregated, republished, uploaded, posted, publicly displayed, encoded, translated, transmitted, distributed, sold, licensed, or otherwise exploited for any commercial purpose whatsoever, without our express prior written permission.
                                </p>

                                <p className="mb-4">
                                    If you wish to make any use of the Services, Content, or Marks other than as set out in this section or elsewhere in our Legal Terms, please address your request to: support@hydroxygenlabs.com. If we ever grant you the permission to post, reproduce, or publicly display any part of our Services or Content, you must identify us as the owners or licensors of the Services, Content, or Marks and ensure that any copyright or proprietary notice appears or is visible on posting, reproducing, or displaying our Content.
                                </p>

                                <p className="mb-4">
                                    We reserve all rights not expressly granted to you in and to the Services, Content, and Marks.
                                </p>

                                <p className="mb-4">
                                    Any breach of these Intellectual Property Rights will constitute a material breach of our Legal Terms and your right to use our Services will terminate immediately.
                                </p>
                            </div>

                            <div>
                                <h3 className="text-xl font-bold mb-3">Your submissions</h3>
                                <p className="mb-4">
                                    Please review this section and the &quot;<a href="#prohibited" className="text-[var(--link-text)] hover:text-[var(--link-hover)]">PROHIBITED ACTIVITIES</a>&quot; section carefully prior to using our Services to understand the (a) rights you give us and (b) obligations you have when you post or upload any content through the Services.
                                </p>

                                <p className="mb-4">
                                    <strong>Submissions:</strong> By directly sending us any question, comment, suggestion, idea, feedback, or other information about the Services (&quot;Submissions&quot;), you agree to assign to us all intellectual property rights in such Submission. You agree that we shall own this Submission and be entitled to its unrestricted use and dissemination for any lawful purpose, commercial or otherwise, without acknowledgment or compensation to you.
                                </p>

                                <p className="mb-4">
                                    <strong>You are responsible for what you post or upload:</strong> By sending us Submissions through any part of the Services you:
                                </p>

                                <ul className="list-disc pl-6 space-y-2 mb-4">
                                    <li>
                                        confirm that you have read and agree with our &quot;<a href="#prohibited" className="text-[var(--link-text)] hover:text-[var(--link-hover)]">PROHIBITED ACTIVITIES</a>&quot; and will not post, send, publish, upload, or transmit through the Services any Submission that is illegal, harassing, hateful, harmful, defamatory, obscene, bullying, abusive, discriminatory, threatening to any person or group, sexually explicit, false, inaccurate, deceitful, or misleading;
                                    </li>
                                    <li>
                                        to the extent permissible by applicable law, waive any and all moral rights to any such Submission;
                                    </li>
                                    <li>
                                        warrant that any such Submission are original to you or that you have the necessary rights and licenses to submit such Submissions and that you have full authority to grant us the above-mentioned rights in relation to your Submissions; and
                                    </li>
                                    <li>
                                        warrant and represent that your Submissions do not constitute confidential information.
                                    </li>
                                </ul>

                                <p>
                                    You are solely responsible for your Submissions and you expressly agree to reimburse us for any and all losses that we may suffer because of your breach of (a) this section, (b) any third party&apos;s intellectual property rights, or (c) applicable law.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="mt-12" id="userreps">
                        <h2 className="text-2xl font-bold mb-4">3. USER REPRESENTATIONS</h2>

                        <p className="mb-4">
                            You may be required to register to use the Services. You agree to keep your password confidential and will be responsible for all use of your account and password. We reserve the right to remove, reclaim, or change a username you select if we determine, in our sole discretion, that such username is inappropriate, obscene, or otherwise objectionable.
                        </p>

                        <p className="mb-4">
                            By using the Services, you represent and warrant that: (1) all registration information you submit will be true, accurate, current, and complete; (2) you will maintain the accuracy of such information and promptly update such registration information as necessary; (3) you have the legal capacity and you agree to comply with these Legal Terms; (4) you are not a minor in the jurisdiction in which you reside; (5) you will not access the Services through automated or non-human means, whether through a bot, script or otherwise; (6) you will not use the Services for any illegal or unauthorized purpose; and (7) your use of the Services will not violate any applicable law or regulation.
                        </p>

                        <p className="mt-6">
                            If you provide any information that is untrue, inaccurate, not current, or incomplete, we have the right to suspend or terminate your account and refuse any and all current or future use of the Services (or any portion thereof).
                        </p>
                    </div>

                    <div className="mt-12" id="userreg">
                        <h2 className="text-2xl font-bold mb-4">4. USER REGISTRATION</h2>

                        <p className="mb-4">
                            You may be required to register to use the Services. You agree to keep your password confidential and will be responsible for all use of your account and password. We reserve the right to remove, reclaim, or change a username you select if we determine, in our sole discretion, that such username is inappropriate, obscene, or otherwise objectionable.
                        </p>

                    </div>

                    <div className="mt-12" id="purchases">
                        <h2 className="text-2xl font-bold mb-4">5. PURCHASES AND PAYMENT</h2>

                        <div className="space-y-4">
                            <p>We accept the following forms of payment:</p>
                            <ul className="list-disc pl-6">
                                <li>Apple App Store</li>
                                <li>Google Play Store</li>
                            </ul>

                            <p>You agree to provide current, complete, and accurate purchase and account information for all purchases made via the Services. You further agree to promptly update account and payment information, including email address, payment method, and payment card expiration date, so that we can complete your transactions and contact you as needed. Sales tax will be added to the price of purchases as deemed required by us. We may change prices at any time. All payments shall be in US dollars.</p>

                            <p>You agree to pay all charges at the prices then in effect for your purchases and any applicable shipping fees, and you authorize us to charge your chosen payment provider for any such amounts upon placing your order. We reserve the right to correct any errors or mistakes in pricing, even if we have already requested or received payment.</p>

                            <p>We reserve the right to refuse any order placed through the Services. We may, in our sole discretion, limit or cancel quantities purchased per person, per household, or per order. These restrictions may include orders placed by or under the same customer account, the same payment method, and/or orders that use the same billing or shipping address. We reserve the right to limit or prohibit orders that, in our sole judgment, appear to be placed by dealers, resellers, or distributors.</p>
                        </div>
                    </div>

                    <div className="mt-12" id="subscriptions">
                        <h2 className="text-2xl font-bold mb-4">6. SUBSCRIPTIONS</h2>

                        <div className="space-y-6">
                            <div>
                                <h3 className="text-xl font-bold mb-3">Billing and Renewal</h3>
                                <p>Your subscription will continue and automatically renew unless canceled. You consent to our charging your payment method on a recurring basis without requiring your prior approval for each recurring charge, until such time as you cancel the applicable order. The length of your billing cycle will depend on the type of subscription plan you choose when you subscribed to the Services.</p>
                            </div>

                            <div>
                                <h3 className="text-xl font-bold mb-3">Free Trial</h3>
                                <p>We offer a 14-day free trial to new users who register with the Services. The account will be charged according to the user&apos;s chosen subscription at the end of the free trial.</p>
                            </div>

                            <div>
                                <h3 className="text-xl font-bold mb-3">Cancellation</h3>
                                <p>You may cancel your subscription by logging into the app, navigating to Settings {`>`} Manage Subscription, and selecting Cancel Subscription; by canceling directly through Google Play or the Apple App Store; or by contacting our customer support at {siteDetails.supportEmail} for assistance. Your cancellation will take effect at the end of the current paid term. If you have any questions or are unsatisfied with our Services, please email us at support@hydroxygenlabs.com.</p>
                            </div>

                            <div>
                                <h3 className="text-xl font-bold mb-3">Fee Changes</h3>
                                <p>We may, from time to time, make changes to the subscription fee and will communicate any price changes to you in accordance with applicable law.</p>
                            </div>
                        </div>
                    </div>

                    <div className="mt-12" id="software">
                        <h2 className="text-2xl font-bold mb-4">7. SOFTWARE</h2>

                        <p className="mb-6">
                            We may include software for use in connection with our Services. If such software is accompanied by an end user license agreement (&quot;EULA&quot;), the terms of the EULA will govern your use of the software. If such software is not accompanied by a EULA, then we grant to you a non-exclusive, revocable, personal, and non-transferable license to use such software solely in connection with our services and in accordance with these Legal Terms. Any software and any related documentation is provided &quot;AS IS&quot; without warranty of any kind, either express or implied, including, without limitation, the implied warranties of merchantability, fitness for a particular purpose, or non-infringement. You accept any and all risk arising out of use or performance of any software. You may not reproduce or redistribute any software except in accordance with the EULA or these Legal Terms.
                        </p>
                    </div>

                    <div className="mt-12" id="prohibited">
                        <h2 className="text-2xl font-bold mb-4">8. PROHIBITED ACTIVITIES</h2>

                        <p className="mb-4">
                            You may not access or use the Services for any purpose other than that for which we make the Services available. The Services may not be used in connection with any commercial endeavors except those that are specifically endorsed or approved by us.
                        </p>

                        <p className="mb-4">As a user of the Services, you agree not to:</p>

                        <ul className="list-disc pl-6 space-y-3">
                            <li>Systematically retrieve data or other content from the Services to create or compile, directly or indirectly, a collection, compilation, database, or directory without written permission from us.</li>
                            <li>Trick, defraud, or mislead us and other users, especially in any attempt to learn sensitive account information such as user passwords.</li>
                            <li>Circumvent, disable, or otherwise interfere with security-related features of the Services, including features that prevent or restrict the use or copying of any Content or enforce limitations on the use of the Services and/or the Content contained therein.</li>
                            <li>Disparage, tarnish, or otherwise harm, in our opinion, us and/or the Services.</li>
                            <li>Use any information obtained from the Services in order to harass, abuse, or harm another person.</li>
                            <li>Make improper use of our support services or submit false reports of abuse or misconduct.</li>
                            <li>Use the Services in a manner inconsistent with any applicable laws or regulations.</li>
                            <li>Engage in unauthorized framing of or linking to the Services.</li>
                            <li>Upload or transmit (or attempt to upload or to transmit) viruses, Trojan horses, or other material, including excessive use of capital letters and spamming (continuous posting of repetitive text), that interferes with any party&apos;s uninterrupted use and enjoyment of the Services or modifies, impairs, disrupts, alters, or interferes with the use, features, functions, operation, or maintenance of the Services.</li>
                            <li>Engage in any automated use of the system, such as using scripts to send comments or messages, or using any data mining, robots, or similar data gathering and extraction tools.</li>
                            <li>Delete the copyright or other proprietary rights notice from any Content.</li>
                            <li>Attempt to impersonate another user or person or use the username of another user.</li>
                            <li>Upload or transmit (or attempt to upload or to transmit) any material that acts as a passive or active information collection or transmission mechanism, including without limitation, clear graphics interchange formats (&quot;gifs&quot;), 1x1 pixels, web bugs, cookies, or other similar devices (sometimes referred to as &quot;spyware&quot; or &quot;passive collection mechanisms&quot; or &quot;pcms&quot;).</li>
                            <li>Interfere with, disrupt, or create an undue burden on the Services or the networks or services connected to the Services.</li>
                            <li>Harass, annoy, intimidate, or threaten any of our employees or agents engaged in providing any portion of the Services to you.</li>
                            <li>Attempt to bypass any measures of the Services designed to prevent or restrict access to the Services, or any portion of the Services.</li>
                            <li>Copy or adapt the Services&apos; software, including but not limited to Flash, PHP, HTML, JavaScript, or other code.</li>
                            <li>Except as permitted by applicable law, decipher, decompile, disassemble, or reverse engineer any of the software comprising or in any way making up a part of the Services.</li>
                            <li>Make any unauthorized use of the Services, including collecting usernames and/or email addresses of users by electronic or other means for the purpose of sending unsolicited email, or creating user accounts by automated means or under false pretenses.</li>
                            <li>Use the Services as part of any effort to compete with us or otherwise use the Services and/or the Content for any revenue-generating endeavor or commercial enterprise.</li>
                        </ul>
                    </div>

                    <div className="mt-12" id="ugc">
                        <h2 className="text-2xl font-bold mb-4">9. USER GENERATED CONTRIBUTIONS</h2>

                        <p className="mb-4">
                            The Services does not offer users to submit or post content. We may provide you with the opportunity to create, submit, post, display, transmit, perform, publish, distribute, or broadcast content and materials to us or on the Services, including but not limited to text, writings, video, audio, photographs, graphics, comments, suggestions, or personal information or other material (collectively, &quot;Contributions&quot;). Contributions may be viewable by other users of the Services and through third-party websites. As such, any Contributions you transmit may be treated in accordance with the Services&apos; Privacy Policy.
                        </p>

                        <p className="mb-4">When you create or make available any Contributions, you thereby represent and warrant that:</p>

                        <ul className="list-disc pl-6 space-y-3">
                            <li>The creation, distribution, transmission, public display, or performance, and the accessing, downloading, or copying of your Contributions do not and will not infringe the proprietary rights, including but not limited to the copyright, patent, trademark, trade secret, or moral rights of any third party.</li>
                            <li>You are the creator and owner of or have the necessary licenses, rights, consents, releases, and permissions to use and to authorize us, the Services, and other users of the Services to use your Contributions in any manner contemplated by the Services and these Legal Terms.</li>
                            <li>You have the written consent, release, and/or permission of each and every identifiable individual person in your Contributions to use the name or likeness of each and every such identifiable individual person to enable inclusion and use of your Contributions in any manner contemplated by the Services and these Legal Terms.</li>
                            <li>Your Contributions are not false, inaccurate, or misleading.</li>
                            <li>Your Contributions are not unsolicited or unauthorized advertising, promotional materials, pyramid schemes, chain letters, spam, mass mailings, or other forms of solicitation.</li>
                            <li>Your Contributions are not obscene, lewd, lascivious, filthy, violent, harassing, libelous, slanderous, or otherwise objectionable (as determined by us).</li>
                            <li>Your Contributions do not ridicule, mock, disparage, intimidate, or abuse anyone.</li>
                            <li>Your Contributions are not used to harass or threaten (in the legal sense of those terms) any other person and to promote violence against a specific person or class of people.</li>
                            <li>Your Contributions do not violate any applicable law, regulation, or rule.</li>
                            <li>Your Contributions do not violate the privacy or publicity rights of any third party.</li>
                            <li>Your Contributions do not violate any applicable law concerning child pornography, or otherwise intended to protect the health or well-being of minors.</li>
                            <li>Your Contributions do not include any offensive comments that are connected to race, national origin, gender, sexual preference, or physical handicap.</li>
                            <li>Your Contributions do not otherwise violate, or link to material that violates, any provision of these Legal Terms, or any applicable law or regulation.</li>
                        </ul>

                        <p className="mt-4">
                            Any use of the Services in violation of the foregoing violates these Legal Terms and may result in, among other things, termination or suspension of your rights to use the Services.
                        </p>
                    </div>

                    <div className="mt-12" id="license">
                        <h2 className="text-2xl font-bold mb-4">10. CONTRIBUTION LICENSE</h2>

                        <p className="mb-4">
                            You and Services agree that we may access, store, process, and use any information and personal data that you provide following the terms of the Privacy Policy and your choices (including settings).
                        </p>

                        <p className="mb-4">
                            By submitting suggestions or other feedback regarding the Services, you agree that we can use and share such feedback for any purpose without compensation to you.
                        </p>

                        <p className="mb-4">
                            We do not assert any ownership over your Contributions. You retain full ownership of all of your Contributions and any intellectual property rights or other proprietary rights associated with your Contributions. We are not liable for any statements or representations in your Contributions provided by you in any area on the Services. You are solely responsible for your Contributions to the Services and you expressly agree to exonerate us from any and all responsibility and to refrain from any legal action against us regarding your Contributions.
                        </p>
                    </div>

                    <div className="mt-12" id="mobile">
                        <h2 className="text-2xl font-bold mb-4">11. MOBILE APPLICATION LICENSE</h2>

                        <div className="space-y-6">
                            <div>
                                <h3 className="text-xl font-bold mb-3">Use License</h3>
                                <p className="mb-4">
                                    If you access the Services via the App, then we grant you a revocable, non-exclusive, non-transferable, limited right to install and use the App on wireless electronic devices owned or controlled by you, and to access and use the App on such devices strictly in accordance with the terms and conditions of this mobile application license contained in these Legal Terms. You shall not: (1) except as permitted by applicable law, decompile, reverse engineer, disassemble, attempt to derive the source code of, or decrypt the App; (2) make any modification, adaptation, improvement, enhancement, translation, or derivative work from the App; (3) violate any applicable laws, rules, or regulations in connection with your access or use of the App; (4) remove, alter, or obscure any proprietary notice (including any notice of copyright or trademark) posted by us or the licensors of the App; (5) use the App for any revenue-generating endeavor, commercial enterprise, or other purpose for which it is not designed or intended; (6) make the App available over a network or other environment permitting access or use by multiple devices or users at the same time; (7) use the App for creating a product, service, or software that is, directly or indirectly, competitive with or in any way a substitute for the App; (8) use the App to send automated queries to any website or to send any unsolicited commercial email; or (9) use any proprietary information or any of our interfaces or our other intellectual property in the design, development, manufacture, licensing, or distribution of any applications, accessories, or devices for use with the App.
                                </p>
                            </div>

                            <div>
                                <h3 className="text-xl font-bold mb-3">Apple and Android Devices</h3>
                                <p className="mb-4">
                                    The following terms apply when you use the App obtained from either the Apple Store or Google Play (each an &quot;App Distributor&quot;) to access the Services: (1) the license granted to you for our App is limited to a non-transferable license to use the application on a device that utilizes the Apple iOS or Android operating systems, as applicable, and in accordance with the usage rules set forth in the applicable App Distributor&apos;s terms of service; (2) we are responsible for providing any maintenance and support services with respect to the App as specified in the terms and conditions of this mobile application license contained in these Legal Terms or as otherwise required under applicable law, and you acknowledge that each App Distributor has no obligation whatsoever to furnish any maintenance and support services with respect to the App; (3) in the event of any failure of the App to conform to any applicable warranty, you may notify the applicable App Distributor, and the App Distributor, in accordance with its terms and policies, may refund the purchase price, if any, paid for the App, and to the maximum extent permitted by applicable law, the App Distributor will have no other warranty obligation whatsoever with respect to the App; (4) you represent and warrant that (i) you are not located in a country that is subject to a US government embargo, or that has been designated by the US government as a &quot;terrorist supporting&quot; country and (ii) you are not listed on any US government list of prohibited or restricted parties; (5) you must comply with applicable third-party terms of agreement when using the App, e.g., if you have a VoIP application, then you must not be in violation of their wireless data service agreement when using the App; and (6) you acknowledge and agree that the App Distributors are third-party beneficiaries of the terms and conditions in this mobile application license contained in these Legal Terms, and that each App Distributor will have the right (and will be deemed to have accepted the right) to enforce the terms and conditions in this mobile application license contained in these Legal Terms against you as a third-party beneficiary thereof.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="mt-12" id="socialmedia">
                        <h2 className="text-2xl font-bold mb-4">12. SOCIAL MEDIA</h2>

                        <p className="mb-4">
                            As part of the functionality of the Services, you may link your account with online accounts you have with third-party service providers (each such account, a &quot;Third-Party Account&quot;) by either: (1) providing your Third-Party Account login information through the Services; or (2) allowing us to access your Third-Party Account, as is permitted under the applicable terms and conditions that govern your use of each Third-Party Account. You represent and warrant that you are entitled to disclose your Third-Party Account login information to us and/or grant us access to your Third-Party Account, without breach by you of any of the terms and conditions that govern your use of the applicable Third-Party Account, and without obligating us to pay any fees or making us subject to any usage limitations imposed by the third-party service provider of the Third-Party Account. By granting us access to any Third-Party Accounts, you understand that (1) we may access, make available, and store (if applicable) any content that you have provided to and stored in your Third-Party Account (the &quot;Social Network Content&quot;) so that it is available on and through the Services via your account, including without limitation any friend lists and (2) we may submit to and receive from your Third-Party Account additional information to the extent you are notified when you link your account with the Third-Party Account. Depending on the Third-Party Accounts you choose and subject to the privacy settings that you have set in such Third-Party Accounts, personally identifiable information that you post to your Third-Party Accounts may be available on and through your account on the Services. Please note that if a Third-Party Account or associated service becomes unavailable or our access to such Third-Party Account is terminated by the third-party service provider, then Social Network Content may no longer be available on and through the Services. You will have the ability to disable the connection between your account on the Services and your Third-Party Accounts at any time. PLEASE NOTE THAT YOUR RELATIONSHIP WITH THE THIRD-PARTY SERVICE PROVIDERS ASSOCIATED WITH YOUR THIRD-PARTY ACCOUNTS IS GOVERNED SOLELY BY YOUR AGREEMENT(S) WITH SUCH THIRD-PARTY SERVICE PROVIDERS. We make no effort to review any Social Network Content for any purpose, including but not limited to, for accuracy, legality, or non-infringement, and we are not responsible for any Social Network Content. You acknowledge and agree that we may access your email address book associated with a Third-Party Account and your contacts list stored on your mobile device or tablet computer solely for purposes of identifying and informing you of those contacts who have also registered to use the Services. You can deactivate the connection between the Services and your Third-Party Account by contacting us using the contact information below or through your account settings (if applicable). We will attempt to delete any information stored on our servers that was obtained through such Third-Party Account, except the username and profile picture that become associated with your account.

                        </p>
                    </div>

                    <div className="mt-12" id="advertisers">
                        <h2 className="text-2xl font-bold mb-4">13. ADVERTISERS</h2>

                        <p className="mb-4">
                            We allow advertisers to display their advertisements and other information in certain areas of the Services, such as sidebar advertisements or banner advertisements. We simply provide the space to place such advertisements, and we have no other relationship with advertisers.
                        </p>
                    </div>

                    <div className="mt-12" id="management">
                        <h2 className="text-2xl font-bold mb-4">14. SERVICES MANAGEMENT</h2>

                        <p className="mb-4">
                            We reserve the right, but not the obligation, to: (1) monitor the Services for violations of these Legal Terms; (2) take appropriate legal action against anyone who, in our sole discretion, violates the law or these Legal Terms, including without limitation, reporting such user to law enforcement authorities; (3) in our sole discretion and without limitation, refuse, restrict access to, limit the availability of, or disable (to the extent technologically feasible) any of your Contributions or any portion thereof; (4) in our sole discretion and without limitation, notice, or liability, to remove from the Services or otherwise disable all files and content that are excessive in size or are in any way burdensome to our systems; and (5) otherwise manage the Services in a manner designed to protect our rights and property and to facilitate the proper functioning of the Services.
                        </p>
                    </div>

                    <div className="mt-12" id="privacy">
                        <h2 className="text-2xl font-bold mb-4">15. PRIVACY POLICY</h2>

                        <p className="mb-4">
                            We care about data privacy and security. Please review our Privacy Policy: <a href="https://checkinmore.com/privacy" className="text-[var(--link-text)] hover:text-[var(--link-hover)]">checkinmore.com/privacy</a>. By using the Services, you agree to be bound by our Privacy Policy, which is incorporated into these Legal Terms. Please be advised the Services are hosted in the United States. If you access the Services from any other region of the world with laws or other requirements governing personal data collection, use, or disclosure that differ from applicable laws in the United States, then through your continued use of the Services, you are transferring your data to the United States, and you expressly consent to have your data transferred to and processed in the United States.
                        </p>
                    </div>

                    <div className="mt-12" id="terms">
                        <h2 className="text-2xl font-bold mb-4">16. TERM AND TERMINATION</h2>

                        <p className="mb-4">
                            These Legal Terms shall remain in full force and effect while you use the Services. WITHOUT LIMITING ANY OTHER PROVISION OF THESE LEGAL TERMS, WE RESERVE THE RIGHT TO, IN OUR SOLE DISCRETION AND WITHOUT NOTICE OR LIABILITY, DENY ACCESS TO AND USE OF THE SERVICES (INCLUDING BLOCKING CERTAIN IP ADDRESSES), TO ANY PERSON FOR ANY REASON OR FOR NO REASON, INCLUDING WITHOUT LIMITATION FOR BREACH OF ANY REPRESENTATION, WARRANTY, OR COVENANT CONTAINED IN THESE LEGAL TERMS OR OF ANY APPLICABLE LAW OR REGULATION. WE MAY TERMINATE YOUR USE OR PARTICIPATION IN THE SERVICES OR DELETE YOUR ACCOUNT AND ANY CONTENT OR INFORMATION THAT YOU POSTED AT ANY TIME, WITHOUT WARNING, IN OUR SOLE DISCRETION.
                        </p>

                        <p className="mb-4">
                            If we terminate or suspend your account for any reason, you are prohibited from registering and creating a new account under your name, a fake or borrowed name, or the name of any third party, even if you may be acting on behalf of the third party. In addition to terminating or suspending your account, we reserve the right to take appropriate legal action, including without limitation pursuing civil, criminal, and injunctive redress.
                        </p>
                    </div>

                    <div className="mt-12" id="modifications">
                        <h2 className="text-2xl font-bold mb-4">17. MODIFICATIONS AND INTERRUPTIONS</h2>

                        <p className="mb-4">
                            We reserve the right to change, modify, or remove the contents of the Services at any time or for any reason at our sole discretion without notice. However, we have no obligation to update any information on our Services. We will not be liable to you or any third party for any modification, price change, suspension, or discontinuance of the Services.
                        </p>

                        <p className="mb-4">
                            We cannot guarantee the Services will be available at all times. We may experience hardware, software, or other problems or need to perform maintenance related to the Services, resulting in interruptions, delays, or errors. We reserve the right to change, revise, update, suspend, discontinue, or otherwise modify the Services at any time or for any reason without notice to you. You agree that we have no liability whatsoever for any loss, damage, or inconvenience caused by your inability to access or use the Services during any downtime or discontinuance of the Services. Nothing in these Legal Terms will be construed to obligate us to maintain and support the Services or to supply any corrections, updates, or releases in connection therewith.
                        </p>
                    </div>

                    <div className="mt-12" id="law">
                        <h2 className="text-2xl font-bold mb-4">18. GOVERNING LAW</h2>

                        <p className="mb-4">
                            These Legal Terms and your use of the Services are governed by and construed in accordance with the laws of the State of Washington applicable to agreements made and to be entirely performed within the State of Washington, without regard to its conflict of law principles.
                        </p>
                    </div>

                    <div className="mt-12" id="disputes">
                        <h2 className="text-2xl font-bold mb-4">19. DISPUTE RESOLUTION</h2>

                        <div className="space-y-6">
                            <div>
                                <h3 className="text-xl font-bold mb-3">Informal Negotiations</h3>
                                <p className="mb-4">
                                    To expedite resolution and control the cost of any dispute, controversy, or claim related to these Legal Terms (each a &quot;Dispute&quot; and collectively, the &quot;Disputes&quot;) brought by either you or us (individually, a &quot;Party&quot; and collectively, the &quot;Parties&quot;), the Parties agree to first attempt to negotiate any Dispute (except those Disputes expressly provided below) informally for at least thirty (30) days before initiating arbitration. Such informal negotiations commence upon written notice from one Party to the other Party.
                                </p>
                            </div>

                            <div>
                                <h3 className="text-xl font-bold mb-3">Binding Arbitration</h3>
                                <p className="mb-4">
                                    If the Parties are unable to resolve a Dispute through informal negotiations, the Dispute (except those Disputes expressly excluded below) will be finally and exclusively resolved by binding arbitration. YOU UNDERSTAND THAT WITHOUT THIS PROVISION, YOU WOULD HAVE THE RIGHT TO SUE IN COURT AND HAVE A JURY TRIAL. The arbitration shall be commenced and conducted under the Commercial Arbitration Rules of the American Arbitration Association (&quot;AAA&quot;) and, where appropriate, the AAA&apos;s Supplementary Procedures for Consumer Related Disputes (&quot;AAA Consumer Rules&quot;), both of which are available at the <a href="http://www.adr.org" target="_blank" rel="noopener noreferrer" className="text-[var(--link-text)] hover:text-[var(--link-hover)]">American Arbitration Association (AAA) website</a>. Your arbitration fees and your share of arbitrator compensation shall be governed by the AAA Consumer Rules and, where appropriate, limited by the AAA Consumer Rules. The arbitration may be conducted in person, through the submission of documents, by phone, or online. The arbitrator will make a decision in writing, but need not provide a statement of reasons unless requested by either Party. The arbitrator must follow applicable law, and any award may be challenged if the arbitrator fails to do so. Except where otherwise required by the applicable AAA rules or applicable law, the arbitration will take place in King County, Washington. Except as otherwise provided herein, the Parties may litigate in court to compel arbitration, stay proceedings pending arbitration, or to confirm, modify, vacate, or enter judgment on the award entered by the arbitrator.
                                </p>
                                <p className="mb-4">
                                    If for any reason, a Dispute proceeds in court rather than arbitration, the Dispute shall be commenced or prosecuted in the state and federal courts located in King County, Washington, and the Parties hereby consent to, and waive all defenses of lack of personal jurisdiction, and forum non conveniens with respect to venue and jurisdiction in such state and federal courts. Application of the United Nations Convention on Contracts for the International Sale of Goods and the Uniform Computer Information Transaction Act (UCITA) are excluded from these Legal Terms.
                                </p>
                                <p className="mb-4">
                                    In no event shall any Dispute brought by either Party related in any way to the Services be commenced more than one (1) years after the cause of action arose. If this provision is found to be illegal or unenforceable, then neither Party will elect to arbitrate any Dispute falling within that portion of this provision found to be illegal or unenforceable and such Dispute shall be decided by a court of competent jurisdiction within the courts listed for jurisdiction above, and the Parties agree to submit to the personal jurisdiction of that court.
                                </p>
                            </div>

                            <div>
                                <h3 className="text-xl font-bold mb-3">Restrictions</h3>
                                <p className="mb-4">
                                    The Parties agree that any arbitration shall be limited to the Dispute between the Parties individually. To the full extent permitted by law, (a) no arbitration shall be joined with any other proceeding; (b) there is no right or authority for any Dispute to be arbitrated on a class-action basis or to utilize class action procedures; and (c) there is no right or authority for any Dispute to be brought in a purported representative capacity on behalf of the general public or any other persons.
                                </p>
                            </div>

                            <div>
                                <h3 className="text-xl font-bold mb-3">Exceptions to Informal Negotiations and Arbitration</h3>
                                <p className="mb-4">
                                    The Parties agree that the following Disputes are not subject to the above provisions concerning informal negotiations binding arbitration: (a) any Disputes seeking to enforce or protect, or concerning the validity of, any of the intellectual property rights of a Party; (b) any Dispute related to, or arising from, allegations of theft, piracy, invasion of privacy, or unauthorized use; and (c) any claim for injunctive relief. If this provision is found to be illegal or unenforceable, then neither Party will elect to arbitrate any Dispute falling within that portion of this provision found to be illegal or unenforceable and such Dispute shall be decided by a court of competent jurisdiction within the courts listed for jurisdiction above, and the Parties agree to submit to the personal jurisdiction of that court.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="mt-12" id="corrections">
                        <h2 className="text-2xl font-bold mb-4">20. CORRECTIONS</h2>

                        <p className="mb-4">
                            There may be information on the Services that contains typographical errors, inaccuracies, or omissions, including descriptions, pricing, availability, and various other information. We reserve the right to correct any errors, inaccuracies, or omissions and to change or update the information on the Services at any time, without prior notice.
                        </p>
                    </div>

                    <div className="mt-12" id="disclaimer">
                        <h2 className="text-2xl font-bold mb-4">21. DISCLAIMER</h2>

                        <p className="mb-4">
                            THE SERVICES ARE PROVIDED ON AN AS-IS AND AS-AVAILABLE BASIS. YOU AGREE THAT YOUR USE OF THE SERVICES WILL BE AT YOUR SOLE RISK. TO THE FULLEST EXTENT PERMITTED BY LAW, WE DISCLAIM ALL WARRANTIES, EXPRESS OR IMPLIED, IN CONNECTION WITH THE SERVICES AND YOUR USE THEREOF, INCLUDING, WITHOUT LIMITATION, THE IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT. WE MAKE NO WARRANTIES OR REPRESENTATIONS ABOUT THE ACCURACY OR COMPLETENESS OF THE SERVICES&apos; CONTENT OR THE CONTENT OF ANY WEBSITES OR MOBILE APPLICATIONS LINKED TO THE SERVICES AND WE WILL ASSUME NO LIABILITY OR RESPONSIBILITY FOR ANY (1) ERRORS, MISTAKES, OR INACCURACIES OF CONTENT AND MATERIALS, (2) PERSONAL INJURY OR PROPERTY DAMAGE, OF ANY NATURE WHATSOEVER, RESULTING FROM YOUR ACCESS TO AND USE OF THE SERVICES, (3) ANY UNAUTHORIZED ACCESS TO OR USE OF OUR SECURE SERVERS AND/OR ANY AND ALL PERSONAL INFORMATION AND/OR FINANCIAL INFORMATION STORED THEREIN, (4) ANY INTERRUPTION OR CESSATION OF TRANSMISSION TO OR FROM THE SERVICES, (5) ANY BUGS, VIRUSES, TROJAN HORSES, OR THE LIKE WHICH MAY BE TRANSMITTED TO OR THROUGH THE SERVICES BY ANY THIRD PARTY, AND/OR (6) ANY ERRORS OR OMISSIONS IN ANY CONTENT AND MATERIALS OR FOR ANY LOSS OR DAMAGE OF ANY KIND INCURRED AS A RESULT OF THE USE OF ANY CONTENT POSTED, TRANSMITTED, OR OTHERWISE MADE AVAILABLE VIA THE SERVICES. WE DO NOT WARRANT, ENDORSE, GUARANTEE, OR ASSUME RESPONSIBILITY FOR ANY PRODUCT OR SERVICE ADVERTISED OR OFFERED BY A THIRD PARTY THROUGH THE SERVICES, ANY HYPERLINKED WEBSITE, OR ANY WEBSITE OR MOBILE APPLICATION FEATURED IN ANY BANNER OR OTHER ADVERTISING, AND WE WILL NOT BE A PARTY TO OR IN ANY WAY BE RESPONSIBLE FOR MONITORING ANY TRANSACTION BETWEEN YOU AND ANY THIRD-PARTY PROVIDERS OF PRODUCTS OR SERVICES. AS WITH THE PURCHASE OF A PRODUCT OR SERVICE THROUGH ANY MEDIUM OR IN ANY ENVIRONMENT, YOU SHOULD USE YOUR BEST JUDGMENT AND EXERCISE CAUTION WHERE APPROPRIATE.

                        </p>
                    </div>

                    <div className="mt-12" id="liability">
                        <h2 className="text-2xl font-bold mb-4">22. LIMITATIONS OF LIABILITY</h2>

                        <p className="mb-4">
                            IN NO EVENT WILL WE OR OUR DIRECTORS, EMPLOYEES, OR AGENTS BE LIABLE TO YOU OR ANY THIRD PARTY FOR ANY DIRECT, INDIRECT, CONSEQUENTIAL, EXEMPLARY, INCIDENTAL, SPECIAL, OR PUNITIVE DAMAGES, INCLUDING LOST PROFIT, LOST REVENUE, LOSS OF DATA, OR OTHER DAMAGES ARISING FROM YOUR USE OF THE SERVICES, EVEN IF WE HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES. NOTWITHSTANDING ANYTHING TO THE CONTRARY CONTAINED HEREIN, OUR LIABILITY TO YOU FOR ANY CAUSE WHATSOEVER AND REGARDLESS OF THE FORM OF THE ACTION, WILL AT ALL TIMES BE LIMITED TO THE AMOUNT PAID, IF ANY, BY YOU TO US DURING THE six (6) mONTH PERIOD PRIOR TO ANY CAUSE OF ACTION ARISING. CERTAIN US STATE LAWS AND INTERNATIONAL LAWS DO NOT ALLOW LIMITATIONS ON IMPLIED WARRANTIES OR THE EXCLUSION OR LIMITATION OF CERTAIN DAMAGES. IF THESE LAWS APPLY TO YOU, SOME OR ALL OF THE ABOVE DISCLAIMERS OR LIMITATIONS MAY NOT APPLY TO YOU, AND YOU MAY HAVE ADDITIONAL RIGHTS.

                        </p>
                    </div>

                    <div className="mt-12" id="indemnification">
                        <h2 className="text-2xl font-bold mb-4">23. INDEMNIFICATION</h2>

                        <p className="mb-4">
                            You agree to defend, indemnify, and hold us harmless, including our subsidiaries, affiliates, and all of our respective officers, agents, partners, and employees, from and against any loss, damage, liability, claim, or demand, including reasonable attorneys&apos; fees and expenses, made by any third party due to or arising out of: (1) use of the Services; (2) breach of these Legal Terms; (3) any breach of your representations and warranties set forth in these Legal Terms; (4) your violation of the rights of a third party, including but not limited to intellectual property rights; or (5) any overt harmful act toward any other user of the Services with whom you connected via the Services. Notwithstanding the foregoing, we reserve the right, at your expense, to assume the exclusive defense and control of any matter for which you are required to indemnify us, and you agree to cooperate, at your expense, with our defense of such claims. We will use reasonable efforts to notify you of any such claim, action, or proceeding which is subject to this indemnification upon becoming aware of it.

                        </p>
                    </div>

                    <div className="mt-12" id="userdata">
                        <h2 className="text-2xl font-bold mb-4">24. USER DATA</h2>

                        <p className="mb-4">
                            We will maintain certain data that you transmit to the Services for the purpose of managing the performance of the Services, as well as data relating to your use of the Services. Although we perform regular routine backups of data, you are solely responsible for all data that you transmit or that relates to any activity you have undertaken using the Services. You agree that we shall have no liability to you for any loss or corruption of any such data, and you hereby waive any right of action against us arising from any such loss or corruption of such data.
                        </p>
                    </div>

                    <div className="mt-12" id="electronic">
                        <h2 className="text-2xl font-bold mb-4">25. ELECTRONIC COMMUNICATIONS, TRANSACTIONS, AND SIGNATURES</h2>

                        <p className="mb-4">
                            Visiting the Services, sending us emails, and completing online forms constitute electronic communications. You consent to receive electronic communications, and you agree that all agreements, notices, disclosures, and other communications we provide to you electronically, via email and on the Services, satisfy any legal requirement that such communication be in writing. YOU HEREBY AGREE TO THE USE OF ELECTRONIC SIGNATURES, CONTRACTS, ORDERS, AND OTHER RECORDS, AND TO ELECTRONIC DELIVERY OF NOTICES, POLICIES, AND RECORDS OF TRANSACTIONS INITIATED OR COMPLETED BY US OR VIA THE SERVICES. You hereby waive any rights or requirements under any statutes, regulations, rules, ordinances, or other laws in any jurisdiction which require an original signature or delivery or retention of non-electronic records, or to payments or the granting of credits by any means other than electronic means.
                        </p>
                    </div>

                    <div className="mt-12" id="sms">
                        <h2 className="text-2xl font-bold mb-4">26. SMS TEXT MESSAGING</h2>

                        <h3 className="mb-4 font-bold">
                            Opting Out
                        </h3>
                        <p className="mb-4">
                            If at any time you wish to stop receiving SMS messages from us, simply reply to the text with &quot;STOP.&quot; You may receive an SMS message confirming your opt out.
                        </p>
                        <h3 className="mb-4 font-bold">
                            Message and Data Rates
                        </h3>
                        <p className="mb-4">
                            Please be aware that message and data rates may apply to any SMS messages sent or received. The rates are determined by your carrier and the specifics of your mobile plan.
                        </p>
                        <h3 className="mb-4 font-bold">
                            Support
                        </h3>
                        <p className="mb-4">
                            If you have any questions or need assistance regarding our SMS communications, please email us at support@hydroxygenlabs.com.
                        </p>
                    </div>

                    <div className="mt-12" id="california">
                        <h2 className="text-2xl font-bold mb-4">27. CALIFORNIA USERS AND RESIDENTS</h2>

                        <p className="mb-4">
                            If any complaint with us is not satisfactorily resolved, you can contact the Complaint Assistance Unit of the Division of Consumer Services of the California Department of Consumer Affairs in writing at 1625 North Market Blvd., Suite N 112, Sacramento, California 95834 or by telephone at (800) 952-5210 or (916) 445-1254.
                        </p>
                    </div>

                    <div className="mt-12" id="misc">
                        <h2 className="text-2xl font-bold mb-4">28. MISCELLANEOUS</h2>

                        <p className="mb-4">
                            These Legal Terms and any policies or operating rules posted by us on the Services or in respect to the Services constitute the entire agreement and understanding between you and us. Our failure to exercise or enforce any right or provision of these Legal Terms shall not operate as a waiver of such right or provision. These Legal Terms operate to the fullest extent permissible by law. We may assign any or all of our rights and obligations to others at any time. We shall not be responsible or liable for any loss, damage, delay, or failure to act caused by any cause beyond our reasonable control. If any provision or part of a provision of these Legal Terms is determined to be unlawful, void, or unenforceable, that provision or part of the provision is deemed severable from these Legal Terms and does not affect the validity and enforceability of any remaining provisions. There is no joint venture, partnership, employment or agency relationship created between you and us as a result of these Legal Terms or use of the Services. You agree that these Legal Terms will not be construed against us by virtue of having drafted them. You hereby waive any and all defenses you may have based on the electronic form of these Legal Terms and the lack of signing by the parties hereto to execute these Legal Terms.
                        </p>
                    </div>

                    <div className="mt-12" id="availability">
                        <h2 className="text-2xl font-bold mb-4">29. SERVICE AVAILABILITY & DOWNTIME</h2>

                        <p className="mb-4">
                            While we strive to provide uninterrupted service, you acknowledge that the Services may experience temporary interruptions due to maintenance, system upgrades, or other technical issues. We will make reasonable efforts to minimize any disruption to the Services, but we cannot guarantee 100% uptime. You understand and agree that any such interruptions do not constitute a breach of this agreement and that we will not be liable for any consequences resulting from such interruptions.

                            We strive to maintain continuous availability of our services, but we do not guarantee that the CheckIn More app, notifications, or text message alerts will always be available, uninterrupted, or error-free. Scheduled maintenance, third-party service outages, or technical issues may result in temporary disruptions. We are not responsible for any consequences arising from such downtime, including but not limited to missed notifications, failure to send check-in reminders, or failures in contacting designated emergency contacts.

                        </p>
                    </div>

                    <div className="mt-12" id="thirdparty">
                        <h2 className="text-2xl font-bold mb-4">30. THIRD-PARTY SERVICES & DEPENDENCIES</h2>

                        <p className="mb-4">
                            The Services may rely on third-party services and dependencies to function properly. While we carefully select our service providers and maintain relationships with reliable partners, we cannot guarantee the continuous availability or reliability of these third-party services. You acknowledge and agree that we shall not be liable for any disruption or loss of functionality caused by these third-party dependencies.
                        </p>
                    </div>

                    <div className="mt-12" id="checkins">
                        <h2 className="text-2xl font-bold mb-4">31. LIMITATION OF RESPONSIBILITY FOR MISSED CHECK-INS</h2>

                        <p className="mb-4">
                            While we strive to ensure the reliability of our check-in system, you acknowledge and agree that various factors beyond our control may affect the delivery or timing of check-in notifications. These factors may include, but are not limited to, network connectivity, device settings, and software operations. We cannot guarantee that every scheduled check-in will be executed exactly as planned, and we shall not be held liable for any consequences resulting from delayed, missed, or failed check-ins.
                        </p>
                    </div>

                    <div className="mt-12" id="emergency">
                        <h2 className="text-2xl font-bold mb-4">32. NO EMERGENCY OR LIFE-SAFETY GUARANTEE</h2>

                        <p className="mb-4">
                            THE SERVICES ARE NOT INTENDED TO BE USED AS AN EMERGENCY OR LIFE-SAFETY SERVICE AND ARE NOT A SUBSTITUTE FOR 911 OR ANY OTHER EMERGENCY SERVICES. We do not monitor check-ins for the purpose of detecting emergencies, and our automated system should not be relied upon in life-threatening situations. If you have an emergency, you should immediately contact emergency services by dialing 911 or your local emergency number.
                        </p>
                    </div>

                    <div className="mt-12" id="contact">
                        <h2 className="text-2xl font-bold mb-4">33. CONTACT US</h2>

                        <p className="mb-4">
                            In order to resolve a complaint regarding the Services or to receive further information regarding use of the Services, please contact us at:
                        </p>

                        <div>
                            <p>HydrOxygen Labs LLC</p>
                            <p>522 W Riverside Ave STE N</p>
                            <p>Spokane, WA 99201</p>
                            <p>United States</p>
                            <p>Email: support@hydroxygenlabs.com</p>
                        </div>
                    </div>
                </div>
            </Section>
        </Container >
    );
};

export default TermsPage;