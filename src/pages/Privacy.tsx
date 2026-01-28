import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Privacy() {
  const { language } = useLanguage();
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      
      <main className="flex-1">
        {/* Header Section */}
        <section className="py-8 mt-24 pt-4">
          <div className="container-wide text-center">
            <h1 className="text-4xl font-bold mb-2 text-gray-900">
              {language === "HI" ? "गोपनीयता नीति" : "Privacy Policy"}
            </h1>
            <p className="text-gray-600 text-lg">
              {language === "HI"
                ? "आपकी गोपनीयता हमारे लिए महत्वपूर्ण है। यह जानें कि हम आपके डेटा की सुरक्षा कैसे करते हैं।"
                : "Your privacy is important to us. Learn how we protect your data."}
            </p>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-0 lg:py-0">
          <div className="container-wide max-w-4xl prose prose-lg prose-blue dark:prose-invert">
            {language === "HI" ? (
              <div className="space-y-8 text-gray-700 pt-6">
                {/* Company Info */}
                <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">कंपनी विवरण</h2>
                  <div className="space-y-2 text-sm">
                    <p><strong>Apeiros AI Private Limited</strong></p>
                    <p><strong>मुख्य कार्यालय का पता:</strong></p>
                    <p>4th Floor, Block-C, Krish Cubical,</p>
                    <p>Govardhan Party Plot, Avalon Hotel Road,</p>
                    <p>Sindhu Bhavan Marg, Thaltej,</p>
                    <p>Ahmedabad, Gujarat – 380059</p>
                    <p><strong>CIN:</strong> U62013MH2024PTC419820</p>
                    <p><strong>ई-मेल:</strong> <a href="mailto:info@apeirosai.com" className="text-blue-600 hover:underline">info@apeirosai.com</a></p>
                    <p><strong>वेबसाइट:</strong> <a href="https://www.apeirosai.com" className="text-blue-600 hover:underline">www.apeirosai.com</a></p>
                  </div>
                </div>

                {/* Introduction */}
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">परिचय</h2>
                  <p>
                    Apeiros AI प्राइवेट लिमिटेड में, हम आपकी गोपनीयता की सुरक्षा के लिए प्रतिबद्ध हैं।
                    यह गोपनीयता नीति बताती है कि जब आप हमारी सेवाओं का उपयोग करते हैं,
                    तो हम आपकी जानकारी को कैसे एकत्रित, उपयोग और साझा करते हैं।
                  </p>
                  <p>
                    यह नीति केवल उस जानकारी पर लागू होती है जो Apeiros अपनी सेवाओं के माध्यम से,
                    ई-मेल, मैसेज और अन्य इलेक्ट्रॉनिक संचार के जरिए एकत्र करता है।
                  </p>
                  <p className="bg-yellow-50 p-4 rounded border border-yellow-200">
                    <strong>नोट:</strong> यह नीति उन जानकारियों पर लागू नहीं होती जो आप किसी तीसरे पक्ष को
                    प्रदान करते हैं या जो Apeiros की सेवाओं से जुड़े किसी थर्ड-पार्टी प्लेटफ़ॉर्म या
                    सोशल नेटवर्क द्वारा एकत्र की जाती हैं।
                  </p>
                </div>

                {/* Consent */}
                <div className="bg-blue-50 p-6 rounded-lg">
                  <p className="text-sm">
                    <strong>
                      हमारी सेवाओं का उपयोग करने या अकाउंट रजिस्टर करने के द्वारा, आप इस गोपनीयता नीति से
                      सहमत होते हैं और अपनी व्यक्तिगत जानकारी के संग्रह, उपयोग, संरक्षण और साझा करने की
                      अनुमति देते हैं।
                    </strong>
                  </p>
                </div>

                {/* Section 1 */}
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">1. हम कौन-सी जानकारी एकत्र करते हैं</h2>
                  <p>
                    Apeiros अपनी सेवाओं के उपयोगकर्ताओं से निम्न प्रकार की जानकारी एकत्र करता है:
                  </p>

                  <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">व्यक्तिगत जानकारी</h3>
                  <p>
                    व्यक्तिगत जानकारी वह होती है जिससे किसी व्यक्ति की पहचान की जा सकती है। इसमें
                    अनाम (anonymous) या सामूहिक (aggregated) डेटा शामिल नहीं होता।
                  </p>

                  <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">एकत्रित डेटा के प्रकार:</h3>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li><strong>बिक्री से जुड़ा डेटा:</strong> बिलिंग और ग्राहक जानकारी जैसे मोबाइल नंबर, पता आदि</li>
                    <li><strong>उपयोग डेटा:</strong> ऐप/सेवाओं के उपयोग से संबंधित जानकारी जैसे IP एड्रेस, ब्राउज़र प्रकार</li>
                    <li><strong>कुकीज़ और ट्रैकिंग डेटा:</strong> आपकी गतिविधि ट्रैक करने के लिए</li>
                    <li><strong>लोकेशन डेटा:</strong> यदि आपके डिवाइस में लोकेशन अनुमति चालू है तो आपका लोकेशन डेटा</li>
                    <li><strong>अकाउंट जानकारी:</strong> नाम, ई-मेल, पासवर्ड, मोबाइल नंबर, वेबसाइट आदि</li>
                    <li><strong>आपकी प्राथमिकताएँ:</strong> भाषा, टाइम ज़ोन और अन्य सेटिंग्स</li>
                    <li><strong>सर्च और गतिविधि:</strong> आपके द्वारा की गई खोजें और चुने गए परिणाम</li>
                    <li><strong>संचार:</strong> आप और अन्य यूज़र/व्यापारी के बीच संवाद</li>
                    <li><strong>लेन-देन जानकारी:</strong> भुगतान और बिलिंग विवरण (एन्क्रिप्टेड)</li>
                  </ul>
                </div>

                {/* Section 2 */}
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">2. हम आपकी जानकारी का उपयोग कैसे करते हैं</h2>
                  <p>हम आपकी जानकारी का उपयोग निम्न उद्देश्यों के लिए करते हैं:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>आपके प्रश्नों का उत्तर देने के लिए</li>
                    <li>सेवाओं को बेहतर बनाने और उपयोग को समझने के लिए</li>
                    <li>आपकी रुचि के अनुसार कंटेंट दिखाने के लिए</li>
                    <li>भुगतान और लेन-देन पूरा करने के लिए</li>
                    <li>तकनीकी समस्याओं का समाधान करने के लिए</li>
                    <li>ज़रूरी सूचनाएँ और ऑफ़र भेजने के लिए</li>
                    <li>प्रासंगिक विज्ञापन दिखाने के लिए</li>
                    <li>रिपोर्ट और रिसर्च के लिए</li>
                    <li>कस्टमर सपोर्ट देने के लिए</li>
                    <li>कानूनी दायित्व निभाने के लिए</li>
                    <li>सेवाओं में बदलाव की जानकारी देने के लिए</li>
                  </ul>
                </div>

                {/* Section 3 */}
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">3. आपकी जानकारी कैसे साझा की जाती है</h2>
                  <p>
                    हम आपकी व्यक्तिगत जानकारी बेचते नहीं हैं, लेकिन निम्न परिस्थितियों में साझा कर सकते हैं:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>हमारी सहयोगी कंपनियों के साथ</li>
                    <li>सेवा प्रदाताओं के साथ (गोपनीयता शर्तों के अंतर्गत)</li>
                    <li>मर्जर, अधिग्रहण या संपत्ति बिक्री की स्थिति में</li>
                    <li>आपकी अनुमति से मार्केटिंग पार्टनर्स के साथ</li>
                    <li>कानूनी आवश्यकताओं के तहत</li>
                    <li>धोखाधड़ी या अवैध गतिविधि रोकने के लिए</li>
                    <li>सोशल नेटवर्क्स के साथ, यदि आप उनके फीचर्स का उपयोग करते हैं</li>
                  </ul>
                </div>

                {/* Section 4 */}
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">4. आपकी जानकारी की सुरक्षा</h2>
                  <p>
                    हम आपकी व्यक्तिगत जानकारी को सुरक्षित रखने के लिए उचित तकनीकी और प्रशासनिक उपाय अपनाते हैं।
                  </p>
                  <p>
                    हालाँकि, इंटरनेट पर डेटा ट्रांसमिशन पूरी तरह सुरक्षित नहीं होता। इसलिए, कृपया अपना
                    यूज़रनेम और पासवर्ड किसी से साझा न करें।
                  </p>
                </div>

                {/* Section 5 */}
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">5. डेटा संरक्षण और अकाउंट बंद करना</h2>
                  <p>
                    हम आपकी जानकारी केवल उतनी ही अवधि तक रखते हैं जितनी आवश्यक हो या कानून द्वारा आवश्यक हो।
                  </p>
                  <p>
                    आप अपनी प्रोफ़ाइल सेटिंग्स से अपना अकाउंट बंद कर सकते हैं। कुछ जानकारी कानूनी कारणों से
                    सुरक्षित रखी जा सकती है।
                  </p>
                </div>

                {/* Section 6 */}
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">6. आपके डेटा अधिकार</h2>
                  <p>आपको निम्न अधिकार प्राप्त हैं:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>अपनी जानकारी देखने का अधिकार</li>
                    <li>गलत जानकारी सुधारने का अधिकार</li>
                    <li>कुछ स्थितियों में डेटा हटाने का अधिकार</li>
                  </ul>
                  <p>
                    इन अधिकारों के लिए संपर्क करें:{" "}
                    <a href="mailto:info@apeirosai.com" className="text-blue-600 hover:underline">
                      info@apeirosai.com
                    </a>
                  </p>
                </div>

                {/* Section 7 */}
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">7. थर्ड-पार्टी लिंक और सेवाएँ</h2>
                  <p>
                    हमारी वेबसाइट पर अन्य वेबसाइट्स के लिंक हो सकते हैं। उनकी गोपनीयता नीतियों के लिए हम
                    ज़िम्मेदार नहीं हैं।
                  </p>
                </div>

                {/* Section 8 */}
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">8. आयु सीमा</h2>
                  <p>
                    हमारी सेवाएँ 18 वर्ष से कम आयु के उपयोगकर्ताओं के लिए नहीं हैं। यदि ऐसी जानकारी मिलती है,
                    तो अकाउंट तुरंत हटा दिया जाएगा।
                  </p>
                </div>

                {/* Section 9 */}
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">9. गोपनीयता नीति में बदलाव</h2>
                  <p>
                    हम समय-समय पर इस नीति को अपडेट कर सकते हैं। बदलाव के बाद सेवाओं का उपयोग जारी रखना आपकी
                    सहमति मानी जाएगी।
                  </p>
                </div>

                {/* Section 10 */}
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">10. गोपनीयता अधिकार (भारत)</h2>
                  <p>
                    भारतीय कानून के अनुसार, उपयोगकर्ता यह जानने का अनुरोध कर सकते हैं कि उनकी जानकारी किन
                    थर्ड-पार्टी के साथ साझा की गई है।
                  </p>
                </div>

                {/* Section 11 */}
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">11. संपर्क करें</h2>
                  <p>यदि आपको इस नीति से संबंधित कोई प्रश्न हो, तो संपर्क करें:</p>
                  <p>
                    <strong>ई-मेल:</strong>{" "}
                    <a href="mailto:info@apeirosai.com" className="text-blue-600 hover:underline">
                      info@apeirosai.com
                    </a>
                  </p>
                  <p>
                    <strong>पता:</strong> Apeiros AI Pvt. Ltd, India
                  </p>
                  <p className="text-sm text-gray-500 mt-4">अंतिम अपडेट: 1 अप्रैल 2024</p>
                </div>
              </div>
            ) : (
            <div className="space-y-8 text-gray-700 pt-6">
              {/* Company Info */}
              <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Apeiros AI Private Limited</h2>
                <div className="space-y-2 text-sm">
                  <p><strong>Head Office Address:</strong> 4th floor, Block-C, Krish Cubical, Govardhan partyplot Avalonhotel Road, Sindhu Bhavan Marg, Thaltej, Ahmedabad, Gujarat 380059</p>
                  <p><strong>CIN:</strong> U62013MH2024PTC419820</p>
                  <p><strong>Email:</strong> <a href="mailto:info@apeirosai.com" className="text-blue-600 hover:underline">info@apeirosai.com</a></p>
                  <p><strong>Website:</strong> <a href="https://www.apeirosai.com" className="text-blue-600 hover:underline">www.apeirosai.com</a></p>
                </div>
              </div>

              {/* Introduction */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Introduction</h2>
                <p>At Apeiros AI Pvt. Ltd, we are committed to protecting your privacy through our compliance with privacy policies. This Privacy Policy explains how we collect, use, and disclose your information when you use our services.</p>
                <p>This policy applies only to the information Apeiros collects through its Services, in email, text and other electronic communications sent through or in connection with its Services.</p>
                <p className="bg-yellow-50 p-4 rounded border border-yellow-200"><strong>Note:</strong> This policy DOES NOT apply to information that you provide to, or that is collected by, any third-party through Apeiros's Services and social networks that you use in connection with its Services.</p>
              </div>

              {/* Consent */}
              <div className="bg-blue-50 p-6 rounded-lg">
                <p className="text-sm"><strong>By accessing or using our Services and/or registering for an account with Apeiros, you agree to this privacy policy and you are consenting to Apeiros's collection, use, disclosure, retention, and protection of your personal information as described here.</strong></p>
              </div>

              {/* Section 1 */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Information We Collect</h2>
                <p>Apeiros collects several types of information from and about users of our Services:</p>
                
                <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Personal Information</h3>
                <p>Personal Information is information that can be associated with a specific person and could be used to identify that specific person. We do not consider personal information to include information that has been made anonymous or aggregated.</p>

                <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Types of Data We Collect:</h3>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong>Sales data:</strong> Billing and client data including customer information like phone number, address and other customer details</li>
                  <li><strong>Usage Data:</strong> Information about how you access and use our app/services, including IP address, browser type, and browsing patterns</li>
                  <li><strong>Cookies and Tracking Data:</strong> We may use cookies and similar tracking technologies to track activity on our app/product/website</li>
                  <li><strong>Location data:</strong> We may collect your live location based on your mobile/desktop settings wherein location is activated from your end</li>
                  <li><strong>Account information:</strong> Your full name, email address, postal code, password, gender, mobile phone number, and website</li>
                  <li><strong>Your preferences:</strong> Time zone, language, and other settings</li>
                  <li><strong>Search and activity:</strong> Search terms you have looked up and results you selected</li>
                  <li><strong>Communications:</strong> Communications between you and other users or merchants through our Services</li>
                  <li><strong>Transactional information:</strong> Phone number, address, email, billing information and payment card information (encrypted)</li>
                </ul>
              </div>

              {/* Section 2 */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">2. How We Use Your Information</h2>
                <p>We use the information we collect for various purposes, including to:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Process and respond to your queries</li>
                  <li>Understand our users and improve the content and features of our Services</li>
                  <li>Personalize content to your interests</li>
                  <li>Process and complete your transactions</li>
                  <li>Administer our Services and diagnose technical problems</li>
                  <li>Send you communications that you have requested or that may be of interest to you</li>
                  <li>Show you ads that are relevant to you</li>
                  <li>Generate reports and conduct research on our user base</li>
                  <li>Provide you with customer support</li>
                  <li>Carry out our obligations and enforce our rights</li>
                  <li>Notify you about changes to our Services</li>
                </ul>
              </div>

              {/* Section 3 */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">3. How We Share Your Information</h2>
                <p className="mb-4"><strong>We do not sell your personal information</strong> but may disclose it in the following ways:</p>
                
                <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Information Sharing:</h3>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>With our subsidiaries and affiliates</li>
                  <li>With contractors and service providers bound by confidentiality obligations</li>
                  <li>In case of merger, divestiture, or sale of assets</li>
                  <li>With third-parties for marketing purposes (if you consent)</li>
                  <li>To fulfill your requested purpose</li>
                  <li>With service providers for emails, messages, voice recognition, analytics, and payment processing</li>
                  <li>When required by law or to prevent illegal activities</li>
                  <li>With social networks if you interact with their features</li>
                  <li>Where necessary to protect rights, property, or safety</li>
                </ul>
              </div>

              {/* Section 4 */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Security of Your Information</h2>
                <p>We take appropriate technical and organizational security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction.</p>
                <p>We have implemented appropriate physical, electronic, and managerial procedures to safeguard your information. Third-party payment processors are validated as PCI compliant service providers.</p>
                <div className="bg-yellow-50 p-4 rounded border border-yellow-200 mt-4">
                  <p className="text-sm"><strong>Important:</strong> No method of transmission over the internet is 100% secure. You play an important role in keeping your personal information secure by not sharing your username or password.</p>
                </div>
              </div>

              {/* Section 5 */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Data Retention & Account Termination</h2>
                <p>We retain your information only as long as necessary for the purposes set out in this policy or as required by law.</p>
                <p>You can close your account by visiting your profile settings page. We will remove your public posts from view and dissociate them from your account profile, but we may retain information for authorized purposes or as required by law.</p>
              </div>

              {/* Section 6 */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Your Data Protection Rights</h2>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong>The right to access</strong> – You have the right to request copies of your personal data</li>
                  <li><strong>The right to rectification</strong> – You have the right to request that we correct any inaccurate information</li>
                  <li><strong>The right to erase</strong> – You have the right to request that we erase your personal data under certain conditions</li>
                </ul>
                <p className="mt-4">To access these rights, please contact us at <a href="mailto:info@apeirosai.com" className="text-blue-600 hover:underline">info@apeirosai.com</a></p>
              </div>

              {/* Section 7 */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Third Party Links & Services</h2>
                <p>Our website may contain links to other websites that are not operated by us. We strongly advise you to review the privacy policy of every site you visit, as we have no control over and assume no responsibility for their content or privacy practices.</p>
              </div>

              {/* Section 8 */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Permission Age</h2>
                <p>The Services are not intended for users under the age of 18, unless permitted under applicable local laws. We do not knowingly collect personal information from users under the permissible age. If we become aware of this, we will delete the account immediately.</p>
              </div>

              {/* Section 9 */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Changes to This Privacy Policy</h2>
                <p>We may update our Privacy Policy from time to time. Any changes will be posted on this page. Your continued use of our services after changes have been made indicates your acceptance of the updated policy. We reserve the right to amend this policy to reflect changes in the law, our practices, features, or technology.</p>
              </div>

              {/* Section 10 */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Privacy Rights</h2>
                <p>Indian law permits users who are Indian residents to request a list of third parties to whom we have disclosed their personal information for direct marketing purposes. To make such a request, please contact us at the information provided below.</p>
              </div>

              {/* Section 11 */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Contact Us</h2>
                <p>If you have any queries relating to the processing/usage of information provided by you or Apeiros's Privacy Policy, please contact us:</p>
                <div className="bg-blue-50 p-6 rounded-lg border border-blue-200 mt-4">
                  <p className="mb-2"><strong>Email:</strong> <a href="mailto:info@apeirosai.com" className="text-blue-600 hover:underline">info@apeirosai.com</a></p>
                  <p><strong>Address:</strong> Apeiros AI Pvt. Ltd, India</p>
                </div>
              </div>

              {/* Last Updated */}
              <div className="border-t pt-6 pb-6 text-sm text-gray-600">
                <p><strong>Last Updated:</strong> 1st April 2024</p>
              </div>
            </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
