import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Terms() {
  const { language } = useLanguage();
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      
      <main className="flex-1">
        {/* Header Section */}
        <section className="py-8 mt-24 pt-4">
          <div className="container-wide text-center">
            <h1 className="text-4xl font-bold mb-2 text-gray-900">
              {language === 'HI' ? 'नियम और शर्तें' : 'Terms and Conditions'}
            </h1>
            <p className="text-gray-600 text-lg">
              {language === 'HI' ? 'Apeiros AI Pvt. Ltd. में आपका स्वागत है!' : 'Welcome to Apeiros AI Pvt. Ltd!'}
            </p>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-0 lg:py-0">
          <div className="container-wide max-w-4xl prose prose-lg prose-blue dark:prose-invert">
            <div className="space-y-8 text-gray-700 pt-6">
              {language === 'HI' ? (
                <>
                  {/* Company Info */}
                  <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">कंपनी विवरण</h2>
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">APEIROS AI Private Limited</h3>
                    <div className="space-y-2 text-sm">
                      <p><strong>मुख्य कार्यालय का पता:</strong> 4th Floor, Block-C, Krish Cubical, Govardhan Party Plot, Avalon Hotel Road, Sindhu Bhavan Marg, Thaltej, Ahmedabad, Gujarat – 380059</p>
                      <p><strong>CIN:</strong> U62013MH2024PTC419820</p>
                      <p><strong>ई-मेल:</strong> <a href="mailto:info@apeirosai.com" className="text-blue-600 hover:underline">info@apeirosai.com</a></p>
                      <p><strong>वेबसाइट:</strong> <a href="https://www.apeirosai.com" className="text-blue-600 hover:underline">www.apeirosai.com</a></p>
                    </div>
                  </div>

                  {/* Introduction */}
                  <div>
                    <p>ये नियम और शर्तें, हमारे ब्रांड नाम "LUME" के अंतर्गत उपलब्ध ऐप, प्रोडक्ट, वेबसाइट और सेवाओं (Platform-as-a-Service – PaaS) के उपयोग से जुड़े आपके कानूनी अधिकारों और ज़िम्मेदारियों को परिभाषित करती हैं।</p>
                  </div>
                </>
              ) : (
                <>
                  {/* Company Info */}
                  <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">APEIROS AI Private Limited</h2>
                    <div className="space-y-2 text-sm">
                      <p><strong>Head Office Address:</strong> 4th floor, Block-C, Krish Cubical, Govardhan partyplot Avalonhotel Road, Sindhu Bhavan Marg, Thaltej, Ahmedabad, Gujarat 380059</p>
                      <p><strong>CIN:</strong> U62013MH2024PTC419820</p>
                      <p><strong>Email:</strong> <a href="mailto:info@apeirosai.com" className="text-blue-600 hover:underline">info@apeirosai.com</a></p>
                      <p><strong>Website:</strong> <a href="https://www.apeirosai.com" className="text-blue-600 hover:underline">www.apeirosai.com</a></p>
                    </div>
                  </div>

                  {/* Introduction */}
                  <div>
                    <p>These terms and conditions outlines your legal rights and responsibilities with respect to your access for the use of our app, product, website, and services under brand name "LUME" including but not limited to delivery of information via Platform-as-a-Service (PaaS) i.e., our app, product, website, and services, whether existing now or in the future that link to the Terms.</p>
                  </div>
                </>
              )}

              {/* Section 1 */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  {language === 'HI' ? '1. नियमों की स्वीकृति (Acceptance of Terms)' : '1. Acceptance of Terms'}
                </h2>
                {language === 'HI' ? (
                  <>
                    <p>जब आप हमारे ऐप, प्रोडक्ट, वेबसाइट या किसी भी सेवा का उपयोग करते हैं, तो आप इन नियमों और शर्तों से सहमत होते हैं। ये नियम वर्तमान और भविष्य के सभी उपयोगकर्ताओं (Partner / Store) पर लागू होते हैं, जिन्हें अपने व्यवसाय की लिस्टिंग प्रबंधित करने की अनुमति दी गई है।</p>
                    
                    <p className="mt-4">PaaS के अंतर्गत उपयोग किया गया सॉफ़्टवेयर समय-समय पर अपडेट या अपग्रेड भेज सकता है। जब तक आपका डिवाइस या उसकी सेटिंग्स इसकी अनुमति देती हैं, आप सहमत होते हैं कि ऐसे अपडेट/अपग्रेड इंस्टॉल करना आवश्यक हो सकता है, ताकि सेवाओं का निरंतर उपयोग किया जा सके।</p>

                    <p className="mt-4">यदि Apeiros आपके अकाउंट की पहुंच बंद करता है, तो आप PaaS, अकाउंट विवरण या उसमें मौजूद कंटेंट तक पहुंच नहीं पा सकेंगे।</p>

                    <p className="mt-4">इन नियमों को ध्यानपूर्वक पढ़ें। PaaS का उपयोग करना, इन नियमों को स्वीकार करने के बराबर है और यह APEIROS AI Private Limited के साथ एक कानूनी समझौता बनाता है। यदि आप इन नियमों से सहमत नहीं हैं, तो आप सेवाओं का उपयोग नहीं कर सकते।</p>

                    <p className="mt-4">आप सेवाओं का उपयोग अपने जोखिम पर करते हैं, जिसमें आपत्तिजनक या अनुचित कंटेंट के संपर्क में आने का जोखिम भी शामिल है।</p>

                    <p className="mt-4">Apeiros किसी भी उत्पाद का निर्माता, विक्रेता या वितरक नहीं है। Apeiros केवल ग्राहकों और Partner/Store के बीच लेन-देन को सुगम बनाता है।</p>

                    <p className="mt-4">किसी भी प्रकार की गलत डिलीवरी, कीमत, गुणवत्ता, मात्रा, देरी या सेवा में कमी के लिए Apeiros उत्तरदायी नहीं होगा। उत्पादों की वारंटी/गारंटी पूरी तरह से संबंधित Partner/Store की जिम्मेदारी होगी।</p>

                    <p className="mt-4">भारत में लागू कानूनों के अनुसार, किसी भी नियम उल्लंघन की जिम्मेदारी संबंधित विक्रेता/ब्रांड/निर्माता की होगी, विशेष रूप से प्री-पैक्ड गुड्स के मामले में।</p>

                    <p className="mt-4">कुछ उत्पाद केवल विशेष आयु वर्ग के लिए उपयुक्त हो सकते हैं। उत्पाद विवरण पढ़ना ग्राहक की जिम्मेदारी है। Apeiros किसी भी आहार या व्यक्तिगत आवश्यकता की पूर्ति की गारंटी नहीं देता।</p>

                    <p className="mt-4">ऑर्डर करते समय दी गई जानकारी (मोबाइल नंबर, पता आदि) सही और पूर्ण होना आवश्यक है। प्लेटफ़ॉर्म से खरीदे गए उत्पादों को पुनः बेचने की अनुमति नहीं है।</p>
                  </>
                ) : (
                  <>
                    <p>By accessing this PaaS (i.e., app, product, or website or using any of our services), you agree to be bound by these terms and conditions. These terms and conditions are effective for all existing and future users (so called Partner(s)/Store(s)) having access to 'business listing page' to manage their business listings which the users have claimed.</p>
                    
                    <p className="mt-4">The Platform-as-a-service (PaaS) uses the software or software application which also enables the users to download the software which may include functionality to check for the updates or upgrades to the software automatically. Unless your device, its settings, or computer software does not permit such transmission or use of such upgrades or updates, you agree that the applicable software or software application may send push notifications with regards to the availability of such upgrades or updates from time-to-time therefore you may be required to install certain upgrades or updates to the software or software application in order to continue to access & use the PaaS, or portions thereof (including upgrades or updates designed to correct issues with the Services). Any updates or upgrades provided by Apeiros to you deemed to be termed as the part of the Services through PaaS.</p>

                    <p className="mt-4">You acknowledge and agree that if Apeiros disables access to your account, you may be prevented from accessing the PaaS, which may include your account details or any files or other content contained in your login to the PaaS.</p>

                    <p className="mt-4">Please be aware of these terms and conditions and read carefully before you agree to the same. Please take note that by accessing or using the PaaS, you accept/agree with these terms and conditions concluding a legally binding contract with APEIROS AI Private Limited (hereinafter collectively referred to as "APEIROS"). You may not use the PaaS & its services if you do not accept/agree with the said terms & conditions. Further it is notified that you shall use the PaaS at your own risk, including the risk that you might be exposed to the objectionable content or otherwise inappropriate.</p>

                    <p className="mt-4">In order to use PaaS, your very first step shall be to agree with the terms & conditions by clicking to accept or agree to these terms & conditions in the PaaS for access to the Platform for any particular service; or actually using the services. In this case, you understand and agree that APEIROS shall treat the use of the PaaS with your acceptance of the Terms & conditions.</p>

                    <p className="mt-4">Apeiros is not a manufacturer, seller or distributor of any of the products and merely places an order against the Partner(s)/Store(s) on behalf of the Customers pursuant to the unconditional and irrevocable authority granted by the Customers to Apeiros and facilitates the sale and purchase of the products between Customers and Partners/Store(s), under the contract for sale and purchase of the products between the Customers and Partners/Store(s).</p>

                    <p className="mt-4">Apeiros shall not be liable for any acts or omissions on the part of the Partner/Store(s) including deficiency in service, wrong delivery of order / order mismatch, quality, incorrect pricing, deficient quantity, time taken to prepare or deliver the order, etc.</p>

                    <p className="mt-4">The Partner(s)/Store(s) shall be solely responsible for any warranty/guarantee of the products sold to the Customer and in no event shall be the responsibility of Apeiros.</p>

                    <p className="mt-4">For the Customers in India, it is hereby clarified by Apeiros that the liability of any violation of the applicable rules and regulations made thereunder shall solely rest with the sellers/brand owners, vendors, Partner(s)/ Store(s), importers or manufacturers of the products, Products or any Pre Packed Goods accordingly. For the purpose of clarity Pre-Packed Goods shall mean the items which is placed in a package of any nature, in such a manner that the contents cannot be changed without tampering it and which is ready for sale to the customer.</p>

                    <p className="mt-4">Please note that some of the products may be suitable for certain ages only. You should check the products you are ordering and read its description, if provided, prior to placing your order. Apeiros shall not be liable in the event the Product ordered by you does not meet your dietary or any other requirements and/or restrictions.</p>

                    <p className="mt-4">While placing an order you shall be required to provide certain details, including without limitation, contact number and delivery address. You agree to take particular care when providing these details and warrant that these details are accurate and complete at the time of placing an Order. By providing these details, you express your acceptance to Apeiros's terms and privacy policies. You or any person instructed by you shall not resell the Products purchased via the Platform.</p>
                  </>
                )}
              </div>

              {/* Section 2 */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  {language === 'HI' ? '2. कंटेंट का स्वामित्व और बौद्धिक संपदा अधिकार' : '2. Ownership of Content and Proprietary Rights'}
                </h2>
                {language === 'HI' ? (
                  <p>Apeiros सेवाओं, सॉफ़्टवेयर, कंटेंट, लोगो, ट्रेडमार्क और अन्य सभी बौद्धिक संपदा अधिकारों का एकमात्र स्वामी है। आप बिना लिखित अनुमति के किसी भी कंटेंट को कॉपी, संशोधित, पुनः प्रकाशित या उपयोग नहीं कर सकते। Partner/Store को केवल अपने बिज़नेस लिस्टिंग पेज पर LUME लोगो दिखाने की अनुमति है। यदि आप PaaS पर कोई कंटेंट साझा करते हैं, तो आप Apeiros को उस कंटेंट के उपयोग, प्रचार, विश्लेषण और व्यावसायिक उपयोग के लिए स्थायी, वैश्विक और रॉयल्टी-फ्री अधिकार प्रदान करते हैं।</p>
                ) : (
                  <p>Apeiros is the sole and exclusive copyright owners of the Services and the software Content. Apeiros also exclusively own the copyrights, trademarks, service marks, logos, trade names, trade dress and other intellectual and proprietary rights throughout the world (the "IP Rights"). In case your services may contains information which is confidential for Apeiros then you shall not disclose such confidential & proprietary information without the prior written consent of Apeiros. Apeiros shall initiate the appropriate legal proceedings against you at an appropriate forum in case of any infringement by you and seek the remedies under the Indian law. You are vehemently prohibited to modify, reproduce, publicly display or exploit any content etc., in any manner, in whole or in part except as expressly authorized by Apeiros. All content, designs, text, graphics, logos, and software used on the website are the property of Apeiros. You may not reproduce, distribute, or use any material without our written consent. You, being the Partner/Store, are permitted to display the logo of LUME at your business listing page for the awareness and promotion of your sales through the PaaS.</p>
                )}
              </div>

              {/* Section 3 */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  {language === 'HI' ? '3. उपयोगकर्ता की ज़िम्मेदारियाँ' : '3. User Responsibilities'}
                </h2>
                {language === 'HI' ? (
                  <>
                    <p>आप सहमत होते हैं कि आप:</p>
                    <ul className="list-disc list-inside space-y-2 ml-4 mt-4">
                      <li>सभी लागू कानूनों का पालन करेंगे</li>
                      <li>सही और पूर्ण जानकारी देंगे</li>
                      <li>किसी भी बौद्धिक संपदा अधिकार का उल्लंघन नहीं करेंगे</li>
                    </ul>
                    <p className="mt-4">आपके द्वारा पोस्ट किया गया कंटेंट आपकी ज़िम्मेदारी है। Apeiros किसी भी ग्राहक द्वारा डाले गए कंटेंट की सटीकता या गुणवत्ता की गारंटी नहीं देता। Apeiros को किसी भी समय, बिना सूचना, किसी भी कंटेंट को हटाने या ब्लॉक करने का अधिकार है।</p>
                  </>
                ) : (
                  <>
                    <p>As a user of our app, product, website, or services, you agree to:</p>
                    <ul className="list-disc list-inside space-y-2 ml-4 mt-4">
                      <li>Use the same in accordance with applicable laws and regulations.</li>
                      <li>Provide accurate and complete information when creating an account or submitting any form on the website.</li>
                      <li>Respect the intellectual property rights of others and not engage in any activity that infringes on these rights.</li>
                    </ul>
                  </>
                )}

                {language === 'EN' && (
                  <>
                    <p className="mt-6">As you are availing the services provided by the PaaS and thereby publish certain content, you irrevocably grant Apeiros a perpetual, irrevocable, world-wide, non-exclusive, fully paid and royalty-free, assignable, sub-licensable and transferable license and right to use your content (including content shared by any business user having access to a 'business listing page' to manage claimed business listings or otherwise) and all IP Rights therein for any purpose including API partnerships with third parties and in any media existing now or in future. By "use" we mean use, copy, display, distribute, modify, translate, reformat, incorporate into advertisements and other works, analyze, promote, commercialize, create derivative works, and in the case of third party services, allow their users and others to do the same. You grant us the right to use the name, username or any other information that you submit on the PaaS in connection with your content. You irrevocably waive, and cause to be waived, any claims and assertions of moral rights or attribution with respect to your content brought against Apeiros or its Customers, any third party services and their users.</p>

                    <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Representations Regarding Your Content</h3>
                    <p>You are responsible for your content.</p>
                    <p className="mt-4">You represent and warrant that:</p>
                    <ul className="list-disc list-inside space-y-2 ml-4 mt-2">
                      <li>you are the sole author of, own, or otherwise control all of the rights of your content or have been granted explicit permission from the rights holder to submit your content;</li>
                      <li>Your content was not copied from or based in whole or in part on any other content, work, or website;</li>
                      <li>Your content was not submitted via the use of any automated process such as a script bot;</li>
                      <li>Use of your content by us, third party services, and our and any third party users will not violate or infringe any rights of yours or any third party;</li>
                      <li>Your content is truthful and accurate;</li>
                      <li>Your content does not violate the Guidelines and Policies or any applicable laws</li>
                    </ul>

                    <p className="mt-4">If Your content is a review, you represent and warrant that you are the sole author of that review; the review reflects an actual customer experience that you had; you were not paid or otherwise remunerated in connection with your authoring or posting of the review; and you had no financial, competitive, or other personal incentive to author or post a review that was not a fair expression of your honest opinion.</p>

                    <p className="mt-4">You assume all risks associated with your content, including anyone's reliance on its quality, accuracy, or reliability, or any disclosure by you of information in your content that makes you personally identifiable. While we reserve the right to remove Content, we do not control actions or Content posted by our Customers and do not guarantee the accuracy, integrity or quality of any Content. You acknowledge and agree that Content posted by Customers and any and all liability arising from such Content is the sole responsibility of the Customer who posted the content, and not Apeiros.</p>

                    <p className="mt-4">Apeiros reserve the right, at any time and without prior notice, to remove, block, or disable access to any content that we, for any reason or no reason, consider to be objectionable, in violation of the terms or otherwise harmful to the Services or Customers in our sole discretion. Subject to the requirements of applicable law, we are not obligated to return any of your content to you under any circumstances. Further, Apeiros reserves the right to delete any images and pictures forming part of Customer Content, from such customer page at its sole discretion.</p>

                    <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Third Party Content and Links</h3>
                    <p>Some of the content available through the Services may include or link to materials that belong to third parties. Please note that your use of such third-party services will be governed by the terms of service and privacy policy applicable to the corresponding third party. Apeiros may obtain business addresses, phone numbers, and other contact information from third party vendors who obtain their data from public sources.</p>

                    <p className="mt-4">Apeiros has no control over, and make no representation or endorsement regarding the accuracy, relevancy, copyright compliance, legality, completeness, timeliness or quality of any product, services, advertisements and other content appearing in or linked to the Services. Apeiros do not screen or investigate third party material before or after including it on our Services.</p>

                    <p className="mt-4">Apeiros reserve the right, in our sole discretion and without any obligation, to make improvements to, or correct any error or omissions in, any portion of the content accessible on the Services. Where appropriate, Apeiros may in our sole discretion and without any obligation, verify any updates, modifications, or changes to any content accessible on the Services, but shall not be liable for any delay or inaccuracies related to such updates. You acknowledge and agree that Apeiros is not responsible for the availability of any such external sites or resources, and does not endorse any advertising, products or other materials on or available from such web sites or resources.</p>

                    <p className="mt-4">Third party content, including content posted by our Customers, does not reflect our views or that of Apeiros. In addition, none of the content available through the Services is endorsed or certified by the providers or licensors of such third-party content. Apeiros assume no responsibility or liability for any of your content or any third-party content.</p>

                    <p className="mt-4">You further acknowledge and agree that Apeiros is not liable for any loss or damage which may be incurred by you as a result of the availability of those external sites or resources, or as a result of any reliance placed by you on the completeness, accuracy or existence of any advertising, products or other materials on, or available from, such websites or resources. Without limiting the generality of the foregoing, Apeiros expressly disclaim any liability for any offensive, defamatory, illegal, invasive, unfair, or infringing content provided by third parties.</p>

                    <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Customer Reviews</h3>
                    <p>Customer reviews or ratings for customer page do not reflect the opinion of Apeiros. Apeiros receives multiple reviews or ratings from the customers, which reflect the opinions of the customers. It is pertinent to state that each and every review posted on the App is the personal opinion of the Customer/reviewer only. Apeiros App is a neutral platform, which solely provides a means of communication between Partner(s)/Store(s) and Customers/reviewers including Customers or owners/representatives with access to customer page. The advertisements published on the App Platform are independent of the reviews received by such advertisers.</p>

                    <p className="mt-4">Apeiros are a neutral platform so Apeiros don't arbitrate disputes, however in case if someone writes a review on the customer page that does not consider to be true, the best option for the representative would be to contact the reviewer or post a public response in order to clear up any misunderstandings. If the App platform believes that any particular Customer's review violates any of the policies of Apeiros App, Apeiros may remove the review in its sole discretion if review is in violation of the terms, or content guidelines and policies or otherwise harmful to the Services</p>
                  </>
                )}
              </div>

              {/* Section 4 */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  {language === 'HI' ? '4. अस्वीकरण, उत्तरदायित्व की सीमा और क्षतिपूर्ति' : '4. Disclaimer of warranties, limitation of liability, and Indemnification'}
                </h2>
                {language === 'HI' ? (
                  <>
                    <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">4.1 वारंटी अस्वीकरण</h3>
                    <p>सेवाएँ "जैसी हैं" और "उपलब्धता के अनुसार" प्रदान की जाती हैं। Apeiros किसी भी प्रकार की प्रत्यक्ष या अप्रत्यक्ष वारंटी नहीं देता।</p>

                    <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">4.2 उत्तरदायित्व की सीमा</h3>
                    <p>कानून द्वारा अनुमत सीमा तक, Apeiros किसी भी प्रत्यक्ष, अप्रत्यक्ष, आकस्मिक, विशेष या परिणामी क्षति के लिए उत्तरदायी नहीं होगा, जिसमें डेटा हानि, लाभ हानि या प्रतिष्ठा की हानि शामिल है।</p>

                    <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">4.3 क्षतिपूर्ति (Indemnification)</h3>
                    <p>आप सहमत होते हैं कि आपकी गतिविधियों या कंटेंट के कारण यदि Apeiros पर कोई दावा आता है, तो आप Apeiros को उससे सुरक्षित रखेंगे।</p>
                  </>
                ) : (
                  <>
                    <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">4.1 Disclaimer of Warranties</h3>
                    <p>You acknowledge and agree that the services are provided "As is" and "As available" and that your use of the services shall be at your sole risk. To the fullest extent permitted by applicable law, Apeiros, its affiliates and their respective officers, directors, employees, agents, affiliates, branches, subsidiaries, and licensors ("Apeiros") disclaim all warranties, express or implied, in connection with the services including mobile apps and your use of them. To the fullest extent permitted by the applicable law, Apeiros make no warranties or representations that the services have been and will be provided with due skill, care and diligence or about the accuracy or completeness of the services' content and assume no responsibility for any,</p>
                    <ul className="list-disc list-inside space-y-2 ml-4 mt-4">
                      <li>Errors, Mistakes, or Inaccuracies of content,</li>
                      <li>Personal injury or property damage, of any nature whatsoever, resulting from your access to and use of the services,</li>
                      <li>Any unauthorized access to or use of our servers and/or any and all personal information stored therein,</li>
                      <li>Any interruption or cessation of transmission to or from the services,</li>
                      <li>Any Bugs, Viruses, Trojan Horses, or the like which may be transmitted to or through the services through the actions of any third party,</li>
                      <li>Any loss of your data or content from the services and/or</li>
                      <li>Any errors or omissions in any content or for any loss or damage of any kind incurred as a result of the use of any content posted, emailed, transmitted, or otherwise made available via the services.</li>
                    </ul>

                    <p className="mt-4">Any material downloaded or otherwise obtained through the use of the services is done at your own discretion and risk and you will be solely responsible for any damage to your computer system or other device or loss of data that results from the download of any such material. Apeiros will not be a party to or in any way be responsible for monitoring any transaction between you and third-party providers of products or services. You are solely responsible for all of your communications and interactions with other customers of the services and with other persons with whom you communicate or interact as a result of your use of the services. No advice or information, whether oral or written, obtained by you from Apeiros or through or from the services shall create any warranty not expressly stated in the terms. Unless you have been expressly authorized to do so in writing by Apeiros, you agree that in using the services, you will not use any trade mark, service mark, trade name, logo of any company or organization in a way that is likely or intended to cause confusion about the owner or authorized user of such marks, names or logos.</p>

                    <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">4.2 Limitation of Liability</h3>
                    <p>To the fullest extent permitted by Applicable Law, in no event shall Apeiros be liable to you for any damages resulting from any</p>
                    <ul className="list-disc list-inside space-y-2 ml-4 mt-4">
                      <li>errors, Mistakes, or Inaccuracies of Content, And/or</li>
                      <li>personal injury or property damage, of any nature whatsoever, resulting from your access to and use of the services including mobile app, and/or</li>
                      <li>any unauthorized access to or use of our servers and/or any and all personal information stored therein, and/or</li>
                      <li>any interruption or cessation of transmission to or from our servers, and/or</li>
                      <li>any bugs, viruses, trojan horses, or the like, which may be transmitted to or through the services by any third party, and/or</li>
                      <li>any loss of your data or content from the services, and/or</li>
                      <li>any errors or omissions in any content or for any loss or damage of any kind incurred as a result of your use of any content posted, transmitted, or otherwise made available via the services, whether based on warranty, contract, tort, or any other legal theory, and whether or not the LUME parties are advised of the possibility of such damages, and/or</li>
                      <li>the disclosure of information pursuant to these terms or our privacy policy, and/or</li>
                      <li>your failure to keep your password or account details secure and confidential, and/or</li>
                      <li>loss or damage which may be incurred by you, including but not limited to loss or damage as a result of reliance placed by you on the completeness, accuracy or existence of any advertising, or as a result of any relationship or transaction between you and any advertiser or sponsor whose advertising appears on the services, and/or delay or failure in performance resulting from causes, beyond Apeiros's reasonable control. In no event, Apeiros shall be liable to you for any indirect, incidental, special, punitive, exemplary or consequential damages whatsoever, however caused and under any theory of liability, including but not limited to, any loss of profit (whether incurred directly or indirectly), any loss of goodwill or business reputation, any loss of data suffered, cost of procurement of substitute goods or services, or other intangible loss.</li>
                    </ul>

                    <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">4.3 Indemnification</h3>
                    <p>You agree to indemnify, defend, and hold harmless Apeiros from and against any third-party claims, damages (actual and/or consequential), actions, proceedings, demands, losses, liabilities, costs and expenses (including reasonable legal fees) suffered or reasonably incurred by us arising as a result of, or in connection with:</p>
                    <ul className="list-disc list-inside space-y-2 ml-4 mt-4">
                      <li>your content,</li>
                      <li>your unauthorized use of the Services, or products or services included or advertised in the Services;</li>
                      <li>your access to and use of the Services;</li>
                      <li>your violation of any rights of another party; or</li>
                      <li>your breach of these Terms, including, but not limited to, any infringement by you of the copyright or intellectual property rights of any third party. We retain the exclusive right to settle, compromise and pay, without your prior consent, any and all claims or causes of action which are brought against us. We reserve the right, at your expense, to assume the exclusive defence and control of any matter for which you are required to indemnify us and you agree to cooperate with our defence of these claims. You agree not to settle any matter in which we are named as a defendant and/or for which you have indemnity obligations without our prior written consent. We will use reasonable efforts to notify you of any such claim, action or proceeding upon becoming aware of it.</li>
                    </ul>
                  </>
                )}
              </div>

              {/* Section 5 */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  {language === 'HI' ? '5. सेवाओं की समाप्ति' : '5. Termination of your access to the services'}
                </h2>
                {language === 'HI' ? (
                  <>
                    <p>आप कभी भी अपना अकाउंट हटाने के लिए हमसे संपर्क कर सकते हैं।</p>
                    <p className="mt-4">Apeiros बिना पूर्व सूचना के, नियमों के उल्लंघन या लंबे समय तक उपयोग न होने पर, सेवाएँ समाप्त कर सकता है।</p>
                  </>
                ) : (
                  <>
                    <p>You can delete your account at any time by contacting us via the "Contact Us" link at the bottom of every page.</p>
                    <p className="mt-4">Apeiros may terminate your use of the Services and deny you access to the Services in our sole discretion for any reason or no reason, including your:</p>
                    <ul className="list-disc list-inside space-y-2 ml-4 mt-4">
                      <li>violation of these Terms; or</li>
                      <li>lack of use of the Services.</li>
                    </ul>
                    <p className="mt-4">You agree that any termination of your access to the Services may be affected without prior notice, and acknowledge and agree that we may immediately deactivate or delete your account and all related information and/or bar any further access to your account or the Services. If you use the Services in violation of these Terms, we may, in our sole discretion, retain all data collected from your use of the Services. Further, you agree that we shall not be liable to you or any third party for the discontinuation or termination of your access to the Services.</p>
                  </>
                )}
              </div>

              {/* Section 6 */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  {language === 'HI' ? '6. नियमों में बदलाव' : '6. Changes to Terms'}
                </h2>
                {language === 'HI' ? (
                  <p>Apeiros समय-समय पर इन नियमों को अपडेट कर सकता है। बदलाव के बाद सेवाओं का उपयोग जारी रखना, नई शर्तों की स्वीकृति माना जाएगा।</p>
                ) : (
                  <p>We may update these terms and conditions from time to time. Any changes will be posted on this page, and your continued use of our app, product, website, or services after any changes indicates your acceptance of the new terms.</p>
                )}
              </div>

              {/* Section 7 */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  {language === 'HI' ? '7. लागू कानून और क्षेत्राधिकार' : '7. Governing Law/Waiver'}
                </h2>
                {language === 'HI' ? (
                  <>
                    <p>ये नियम भारत के कानूनों के अनुसार शासित होंगे।</p>
                    <p className="mt-4">किसी भी विवाद का निपटारा केवल मुंबई न्यायालय के क्षेत्राधिकार में होगा।</p>
                  </>
                ) : (
                  <>
                    <p>These Terms and Conditions shall be governed by the laws of India. The Courts of Mumbai shall have exclusive jurisdiction over any dispute arising under these terms. You must commence any legal action against us within one (1) year after the alleged harm initially occurs. Failure to commence the action within that period shall forever bar any claims or causes of action regarding the same facts or occurrence, notwithstanding any statute of limitations or other law to the contrary. Within this period, any failure by us to enforce or exercise any provision of these terms or any related right shall not constitute a waiver of that right or provision.</p>
                    <p className="mt-4">These terms and conditions are governed by and construed in accordance with the laws of India. Any disputes relating to these terms will be subject to the exclusive jurisdiction of the courts of Mumbai, India.</p>
                  </>
                )}
              </div>

              {/* Section 8 */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  {language === 'HI' ? '8. पृथक्करण (Severability)' : '8. Severability'}
                </h2>
                {language === 'HI' ? (
                  <p>यदि इन शर्तों का कोई प्रावधान अमान्य पाया जाता है, तो शेष नियम पूर्ण रूप से लागू रहेंगे।</p>
                ) : (
                  <p>If any provision of these Terms is deemed unlawful, invalid, or unenforceable by a judicial court for any reason, then that provision shall be deemed severed from these Terms, and the remainder of the Terms shall continue in full force and effect.</p>
                )}
              </div>

              {/* Section 9 */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  {language === 'HI' ? '9. साझेदारी या एजेंसी नहीं' : '9. Partnership or Agency'}
                </h2>
                {language === 'HI' ? (
                  <p>इन नियमों से Apeiros और उपयोगकर्ता के बीच कोई साझेदारी या एजेंसी संबंध स्थापित नहीं होता।</p>
                ) : (
                  <p>None of the provisions of these Terms shall be deemed to constitute a partnership or agency between you and Apeiros and you shall have no authority to bind Apeiros in any form or manner, whatsoever.</p>
                )}
              </div>

              {/* Section 10 */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  {language === 'HI' ? '10. संपर्क करें' : '10. Contact Information'}
                </h2>
                {language === 'HI' ? (
                  <>
                    <p>यदि आपको इन नियमों से संबंधित कोई प्रश्न हों, तो संपर्क करें:</p>
                    <div className="bg-blue-50 p-6 rounded-lg border border-blue-200 mt-4">
                      <p className="mb-2"><strong>ई-मेल:</strong> <a href="mailto:info@apeirosai.com" className="text-blue-600 hover:underline">info@apeirosai.com</a></p>
                      <p><strong>पता:</strong> Apeiros AI Pvt. Ltd., India</p>
                    </div>
                  </>
                ) : (
                  <>
                    <p>If you have any questions about these Terms and Conditions, please contact us:</p>
                    <div className="bg-blue-50 p-6 rounded-lg border border-blue-200 mt-4">
                      <p className="mb-2"><strong>Email:</strong> <a href="mailto:info@apeirosai.com" className="text-blue-600 hover:underline">info@apeirosai.com</a></p>
                      <p><strong>Address:</strong> Apeiros AI Pvt. Ltd, India.</p>
                    </div>
                  </>
                )}
              </div>

              {/* Last Updated */}
              <div className="border-t pt-6 pb-6 text-sm text-gray-600">
                <p><strong>{language === 'HI' ? 'अंतिम अपडेट:' : 'Last Updated:'}</strong> {language === 'HI' ? '1 अप्रैल 2025' : '1st April 2025'}</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

