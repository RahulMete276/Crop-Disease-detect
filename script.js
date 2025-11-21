         
         
         // Disease database with detailed information
        const diseaseDatabase = {
            tomato: [
                {
                    name: { en: "Tomato Blight", mr: "टोमॅटो लांडा" },
                    description: { 
                        en: "Tomato blight is a serious fungal disease caused by Phytophthora infestans. It affects leaves, stems, and fruits, causing dark lesions that quickly spread and lead to plant death.",
                        mr: "टोमॅटो लांडा हा फायटोफ्थोरा इन्फेस्टन्स या बुरशीमुळे होणारा एक गंभीर रोग आहे. हा रोग पाने, देठ आणि फळांना प्रभावित करतो, ज्यामुळे गडद घाव तयार होतात आणि झाड मरते."
                    },
                    causalAgent: { en: "Phytophthora infestans", mr: "फायटोफ्थोरा इन्फेस्टन्स" },
                    affectedCrops: { en: "Tomato, Potato, Eggplant", mr: "टोमॅटो, बटाटा, वांगे" },
                    symptoms: {
                        en: [
                            "Dark, water-soaked lesions on leaves",
                            "White fungal growth on underside of leaves in wet conditions",
                            "Brown, rotting spots on fruits",
                            "Stem cankers that girdle the stem"
                        ],
                        mr: [
                            "पानांवर गडद, पाण्याने तूप भरलेले घाव",
                            "ओल्या परिस्थितीत पानांच्या खालच्या बाजूला पांढरी बुरशी वाढ",
                            "फळांवर तपकिरी, सडणारे ठिपके",
                            "देठाला वेढून घेणारे दाह"
                        ]
                    },
                    treatment: {
                        en: [
                            {
                                type: "Chemical Control",
                                content: "Apply copper-based fungicides at first sign of disease. Use products containing chlorothalonil, mancozeb, or copper hydroxide. Repeat applications every 7-10 days as needed."
                            },
                            {
                                type: "Cultural Practices",
                                content: "Remove and destroy infected plant material. Ensure proper spacing for air circulation. Water at the base of plants to keep foliage dry. Use disease-resistant varieties."
                            }
                        ],
                        mr: [
                            {
                                type: "रासायनिक नियंत्रण",
                                content: "रोगाची पहिली लक्षणे दिसल्यावर तांब्यावर आधारित बुरशीनाशक लावा. क्लोरोथालोनिल, मॅन्कोझेब, किंवा कॉपर हायड्रॉक्साइड असलेली उत्पादने वापरा. आवश्यकतेनुसार प्रत्येक 7-10 दिवसांनी पुन्हा लावा."
                            },
                            {
                                type: "सांस्कृतिक पद्धती",
                                content: "संक्रमित वनस्पतींचा समावेश असलेले पदार्थ काढून टाका. वायू चक्रकरिता योग्य अंतर ठेवा. पाने कोरडी ठेवण्यासाठी झाडांच्या पायाशी पाणी द्या. रोग प्रतिरोधक जाती वापरा."
                            }
                        ]
                    },
                    prevention: {
                        en: [
                            "Use disease-resistant tomato varieties",
                            "Rotate crops with non-solanaceous plants",
                            "Ensure proper spacing between plants for good air circulation",
                            "Water at the base of plants, not overhead",
                            "Remove and destroy infected plant debris",
                            "Apply preventative fungicides during humid weather"
                        ],
                        mr: [
                            "रोग प्रतिरोधक टोमॅटो जाती वापरा",
                            "नॉन-सोलॅनेशियस वनस्पतींसह पिके फिरवा",
                            "चांगल्या हवेच्या वाटेकरिता झाडांमध्ये योग्य अंतर ठेवा",
                            "झाडांच्या पायाशी पाणी द्या, डोक्यावरून नाही",
                            "संक्रमित वनस्पतींचा कचरा काढून टाका",
                            "आर्द्र हवामानात प्रतिबंधात्मक बुरशीनाशक लावा"
                        ]
                    },
                    medicines: [
                        {
                            name: { en: "Copper Fungicide", mr: "तांबे बुरशीनाशक" },
                            image: "Copper Fungicide.webp",
                            type: { en: "Fungicide", mr: "बुरशीनाशक" },
                            description: { en: "Effective against fungal diseases", mr: "बुरशीजन्य रोगांवर प्रभावी" }
                        },
                        {
                            name: { en: "Mancozeb", mr: "मॅन्कोझेब" },
                            image: "Mancozeb.jpg",
                            type: { en: "Protective Fungicide", mr: "संरक्षक बुरशीनाशक" },
                            description: { en: "Broad-spectrum protection", mr: "विस्तृत-स्पेक्ट्रम संरक्षण" }
                        },
                        {
                            name: { en: "Chlorothalonil", mr: "क्लोरोथालोनिल" },
                            image: "Chlorothalonil.jpg",
                            type: { en: "Fungicide", mr: "बुरशीनाशक" },
                            description: { en: "For various fungal diseases", mr: "विविध बुरशीजन्य रोगांसाठी" }
                        }
                    ]
                }
            ],
            wheat: [
                {
                    name: { en: "Wheat Rust", mr: "गहू गवत" },
                    description: { 
                        en: "Wheat rust is a fungal disease caused by Puccinia species. It appears as reddish-brown pustules on leaves, stems, and heads, reducing photosynthetic area and grain yield.",
                        mr: "गहू गवत हा पुसिनिया प्रजातींमुळे होणारा एक बुरशीजन्य रोग आहे. हा रोग पानांवर, देठांवर आणि तांदळीवर लालसर-तपकिरी फुंके म्हणून दिसतो, ज्यामुळे प्रकाशसंश्लेषण क्षेत्र आणि धान्य उत्पादन कमी होते."
                    },
                    causalAgent: { en: "Puccinia triticina", mr: "पुसिनिया ट्रिटिसिना" },
                    affectedCrops: { en: "Wheat, Barley, Rye", mr: "गहू, जव, राय" },
                    symptoms: {
                        en: [
                            "Reddish-brown pustules on leaves",
                            "Yellowing of leaves surrounding pustules",
                            "Reduced plant growth and vigor",
                            "Poor grain filling and reduced yield"
                        ],
                        mr: [
                            "पानांवर लालसर-तपकिरी फुंके",
                            "फुंकांभोवती पाने पिवळी पडणे",
                            "झाडांची वाढ आणि चैतन्य कमी होणे",
                            "धान्य भरणे खराब आणि उत्पादन कमी होणे"
                        ]
                    },
                    treatment: {
                        en: [
                            {
                                type: "Chemical Control",
                                content: "Apply fungicides containing triazole, strobilurin, or carboxamide groups. Early application at first sign of disease is most effective."
                            },
                            {
                                type: "Cultural Practices",
                                content: "Plant resistant wheat varieties. Remove volunteer wheat plants that can serve as disease reservoirs. Adjust planting dates to avoid periods of high disease pressure."
                            }
                        ],
                        mr: [
                            {
                                type: "रासायनिक नियंत्रण",
                                content: "ट्रायझोल, स्ट्रोबिलुरिन, किंवा कार्बोक्सामाइड गटांमध्ये असलेले बुरशीनाशक लावा. रोगाची पहिली लक्षणे दिसल्यावर लवकर लागवणे सर्वात प्रभावी असते."
                            },
                            {
                                type: "सांस्कृतिक पद्धती",
                                content: "प्रतिरोधक गहू जाती लावा. रोगाचे भांडार म्हणून काम करू शकणारे स्वयंसेवक गहू झाडे काढा. उच्च रोग दबावाच्या काळापासून टाळण्यासाठी लागवण्याच्या तारखा समायोजित करा."
                            }
                        ]
                    },
                    prevention: {
                        en: [
                            "Plant resistant wheat varieties",
                            "Rotate crops with non-host plants",
                            "Destroy volunteer wheat plants",
                            "Apply balanced fertilization",
                            "Monitor fields regularly for early detection"
                        ],
                        mr: [
                            "प्रतिरोधक गहू जाती लावा",
                            "नॉन-होस्ट वनस्पतींसह पिके फिरवा",
                            "स्वयंसेवक गहू झाडे नष्ट करा",
                            "समतोल खतकरण लावा",
                            "लवकर शोधासाठी शेते नियमितपणे तपासा"
                        ]
                    },
                    medicines: [
                        {
                            name: { en: "Triazole Fungicide", mr: "ट्रायझोल बुरशीनाशक" },
                            image: "Triazole Fungicide.jpg",
                            type: { en: "Systemic Fungicide", mr: "प्रणालीगत बुरशीनाशक" },
                            description: { en: "For rust and other fungal diseases", mr: "गवत आणि इतर बुरशीजन्य रोगांसाठी" }
                        }
                    ]
                }
            ],
             rice: [
           {
            name: { en: "Rice Blast", mr: "तांदूळ ब्लास्ट" },
            description: { 
                en: "Rice blast is a serious fungal disease caused by Magnaporthe oryzae. It affects all parts of the rice plant including leaves, nodes, panicles, and grains, causing diamond-shaped lesions with gray centers and brown borders.",
                mr: "तांदूळ ब्लास्ट हा मॅग्नापोर्थ ओरायझे या बुरशीमुळे होणारा एक गंभीर रोग आहे. हा रोग तांदळाच्या झाडाच्या सर्व भागांना प्रभावित करतो, ज्यामध्ये पाने, गाठ, कणस आणि धान्य समाविष्ट आहेत, ज्यामुळे रंगीन केंद्रे आणि तपकिरी सीमा असलेले हिरे आकाराचे घाव तयार होतात."
            },
            causalAgent: { en: "Magnaporthe oryzae", mr: "मॅग्नापोर्थ ओरायझे" },
            affectedCrops: { en: "Rice, Wheat, Barley", mr: "तांदूळ, गहू, जव" },
            symptoms: {
                en: [
                    "Diamond-shaped lesions with gray centers and brown borders on leaves",
                    "Neck blast that causes the panicle to break at the neck",
                    "Node infection that causes the culm to break",
                    "Grain infection with black spots on glumes"
                ],
                mr: [
                    "पानांवर राखाडी केंद्रे आणि तपकिरी सीमा असलेले हिरे आकाराचे घाव",
                    "कणसाच्या मुठीला तोडणारा मुठीचा ब्लास्ट",
                    "देठाला तोडणारी गाठेची संक्रमण",
                    "भाताच्या तवांवर काळे ठिपके असलेले धान्य संक्रमण"
                ]
            },
            treatment: {
                en: [
                    {
                        type: "Chemical Control",
                        content: "Apply fungicides containing tricyclazole, azoxystrobin, or propiconazole at seedling stage and during tillering. Follow recommended dosage and application schedule."
                    },
                    {
                        type: "Cultural Practices",
                        content: "Plant resistant varieties. Use balanced nitrogen fertilization. Avoid excessive nitrogen which promotes disease. Ensure proper field drainage."
                    }
                ],
                mr: [
                    {
                        type: "रासायनिक नियंत्रण",
                        content: "नर्सरी स्टेज आणि टिलरिंग दरम्यान ट्रायसिक्लाझोल, अझॉक्सिस्ट्रोबिन, किंवा प्रोपिकोनाझोल असलेले बुरशीनाशक लावा. शिफारसीत मात्रा आणि लागू करण्याचे वेळापत्रकाचे पालन करा."
                    },
                    {
                        type: "सांस्कृतिक पद्धती",
                        content: "प्रतिरोधक जाती लावा. समतोल नायट्रोजन खतकरण वापरा. अत्यधिक नायट्रोजन टाळा जे रोगाला प्रोत्साहन देते. योग्य शेत जलनिकास निश्चित करा."
                    }
                ]
            },
            prevention: {
                en: [
                    "Plant resistant rice varieties",
                    "Use disease-free seeds",
                    "Apply balanced fertilizers, especially nitrogen",
                    "Ensure proper field drainage",
                    "Avoid late planting in disease-prone areas",
                    "Remove and destroy infected plant debris"
                ],
                mr: [
                    "प्रतिरोधक तांदळाच्या जाती लावा",
                    "रोगमुक्त बियाणे वापरा",
                    "समतोल खते लावा, विशेषतः नायट्रोजन",
                    "योग्य शेत जलनिकास सुनिश्चित करा",
                    "रोग-प्रवण क्षेत्रांमध्ये उशिरा लागवणे टाळा",
                    "संक्रमित वनस्पतींचा कचरा काढून टाका"
                ]
            },
            medicines: [
                {
                    name: { en: "Tricyclazole", mr: "ट्रायसिक्लाझोल" },
                    image: "Tricyclazole.jpg",
                    type: { en: "Systemic Fungicide", mr: "प्रणालीगत बुरशीनाशक" },
                    description: { en: "Effective against rice blast disease", mr: "तांदूळ ब्लास्ट रोगावर प्रभावी" }
                },
                {
                    name: { en: "Azoxystrobin", mr: "अझॉक्सिस्ट्रोबिन" },
                    image: "Azoxystrobin.png",
                    type: { en: "Broad-spectrum Fungicide", mr: "विस्तृत-स्पेक्ट्रम बुरशीनाशक" },
                    description: { en: "For multiple fungal diseases", mr: "अनेक बुरशीजन्य रोगांसाठी" }
                },
                {
                    name: { en: "Propiconazole", mr: "प्रोपिकोनाझोल" },
                    image: "propiconazole.webp",
                    type: { en: "Systemic Fungicide", mr: "प्रणालीगत बुरशीनाशक" },
                    description: { en: "For leaf blast and neck blast", mr: "पान ब्लास्ट आणि मुठी ब्लास्टसाठी" }
                }
            ]
        }
    ],
    corn: [
        {
            name: { en: "Northern Corn Leaf Blight", mr: "उत्तरी मका पान लांडा" },
            description: { 
                en: "Northern corn leaf blight is a fungal disease caused by Exserohilum turcicum. It produces long, elliptical, grayish-green lesions on leaves that can grow up to 6 inches in length, significantly reducing photosynthetic area and yield.",
                mr: "उत्तरी मका पान लांडा हा एक्सेरोहिलम टर्सिकम या बुरशीमुळे होणारा एक बुरशीजन्य रोग आहे. हा रोग पानांवर लांब, अंडाकृती, राखाडी-हिरव्या रंगाचे घाव तयार करतो जे 6 इंचपर्यंत वाढू शकतात, ज्यामुळे प्रकाशसंश्लेषण क्षेत्र आणि उत्पादन कमी होते."
            },
            causalAgent: { en: "Exserohilum turcicum", mr: "एक्सेरोहिलम टर्सिकम" },
            affectedCrops: { en: "Corn, Sorghum", mr: "मका, ज्वार" },
            symptoms: {
                en: [
                    "Long, elliptical, grayish-green lesions on leaves",
                    "Lesions may have a dark, water-soaked border",
                    "Severe infection causes premature leaf death",
                    "Reduced ear size and poor kernel development"
                ],
                mr: [
                    "पानांवर लांब, अंडाकृती, राखाडी-हिरव्या रंगाचे घाव",
                    "घावांची गडद, पाण्याने तूप भरलेली सीमा असू शकते",
                    "गंभीर संक्रमणामुळे पाने लवकर मरतात",
                    "कानांचा आकार कमी होणे आणि खोबऱ्यांची वाढ खराब होणे"
                ]
            },
            treatment: {
                en: [
                    {
                        type: "Chemical Control",
                        content: "Apply fungicides containing strobilurin, triazole, or SDHI groups when lesions first appear. Repeat applications every 7-14 days during favorable conditions."
                    },
                    {
                        type: "Cultural Practices",
                        content: "Plant resistant hybrids. Practice crop rotation with non-host crops. Reduce plant density to improve air circulation. Use balanced fertilization."
                    }
                ],
                mr: [
                    {
                        type: "रासायनिक नियंत्रण",
                        content: "घाव दिसल्यावर स्ट्रोबिलुरिन, ट्रायझोल, किंवा SDHI गटांमध्ये असलेले बुरशीनाशक लावा. अनुकूल परिस्थितीत प्रत्येक 7-14 दिवसांनी पुन्हा लागू करा."
                    },
                    {
                        type: "सांस्कृतिक पद्धती",
                        content: "प्रतिरोधक हायब्रिड लावा. नॉन-होस्ट पिकांसह पिक फिरवा. वायू चक्रकरिता वनस्पती घनता कमी करा. समतोल खतकरण वापरा."
                    }
                ]
            },
            prevention: {
                en: [
                    "Plant resistant corn hybrids",
                    "Rotate crops with non-host plants",
                    "Reduce plant density for better air circulation",
                    "Apply balanced fertilizers, avoid excessive nitrogen",
                    "Remove and destroy infected crop residue",
                    "Use fungicide seed treatments"
                ],
                mr: [
                    "प्रतिरोधक मका हायब्रिड लावा",
                    "नॉन-होस्ट वनस्पतींसह पिके फिरवा",
                    "चांगल्या वायू चक्रकरिता वनस्पती घनता कमी करा",
                    "समतोल खते लावा, अत्यधिक नायट्रोजन टाळा",
                    "संक्रमित पिकाचा अवशेष काढून टाका",
                    "बुरशीनाशक बियाणे उपचार वापरा"
                ]
            },
            medicines: [
                {
                    name: { en: "Strobilurin Fungicide", mr: "स्ट्रोबिलुरिन बुरशीनाशक" },
                    image: "Strobilurin Fungicide.jpg",
                    type: { en: "Protective Fungicide", mr: "संरक्षक बुरशीनाशक" },
                    description: { en: "For leaf diseases in corn", mr: "मक्यातील पानांच्या रोगांसाठी" }
                },
                {
                    name: { en: "Triazole Fungicide", mr: "ट्रायझोल बुरशीनाशक" },
                    image: "Triazole Fungicide.jpg",
                    type: { en: "Systemic Fungicide", mr: "प्रणालीगत बुरशीनाशक" },
                    description: { en: "For various corn diseases", mr: "विविध मका रोगांसाठी" }
                },
                {
                    name: { en: "SDHI Fungicide", mr: "SDHI बुरशीनाशक" },
                    image: "SDHI Fungicide.jpeg",
                    type: { en: "Systemic Fungicide", mr: "प्रणालीगत बुरशीनाशक" },
                    description: { en: "For broad-spectrum disease control", mr: "विस्तृत-स्पेक्ट्रम रोग नियंत्रणासाठी" }
                }
            ]
        }
    ],
    potato: [
        {
            name: { en: "Potato Late Blight", mr: "बटाटा उशिरा लांडा" },
            description: { 
                en: "Potato late blight is a devastating disease caused by Phytophthora infestans. It affects both foliage and tubers, causing water-soaked lesions on leaves that quickly turn brown and black, leading to rapid plant death and tuber rot.",
                mr: "बटाटा उशिरा लांडा हा फायटोफ्थोरा इन्फेस्टन्स या बुरशीमुळे होणारा एक विनाशकारी रोग आहे. हा रोग पाने आणि कंद दोन्हींना प्रभावित करतो, ज्यामुळे पानांवर पाण्याने तूप भरलेले घाव तयार होतात जे लवकर तपकिरे आणि काळे होतात, ज्यामुळे झाड लवकर मरते आणि कंद सडतात."
            },
            causalAgent: { en: "Phytophthora infestans", mr: "फायटोफ्थोरा इन्फेस्टन्स" },
            affectedCrops: { en: "Potato, Tomato", mr: "बटाटा, टोमॅटो" },
            symptoms: {
                en: [
                    "Water-soaked lesions on leaves that quickly turn brown and black",
                    "White fungal growth on underside of leaves in humid conditions",
                    "Brown to purplish lesions on stems",
                    "Copper-colored, firm, dry rot on tubers"
                ],
                mr: [
                    "पानांवर पाण्याने तूप भरलेले घाव जे लवकर तपकिरे आणि काळे होतात",
                    "आर्द्र परिस्थितीत पानांच्या खालच्या बाजूला पांढरी बुरशी वाढ",
                    "देठांवर तपकिरी ते जांभळा रंगाचे घाव",
                    "कंदांवर तांबड्या रंगाचे, घट्ट, कोरडे साडणे"
                ]
            },
            treatment: {
                en: [
                    {
                        type: "Chemical Control",
                        content: "Apply protectant fungicides like mancozeb or chlorothalonil before infection. Use systemic fungicides containing metalaxyl or mefenoxam after infection. Repeat applications every 7-10 days."
                    },
                    {
                        type: "Cultural Practices",
                        content: "Plant certified disease-free seed tubers. Use proper hilling to protect tubers. Ensure good drainage and avoid excessive irrigation. Remove and destroy infected plants."
                    }
                ],
                mr: [
                    {
                        type: "रासायनिक नियंत्रण",
                        content: "संक्रमणापूर्वी मॅन्कोझेब किंवा क्लोरोथालोनिल सारखे संरक्षक बुरशीनाशक लावा. संक्रमणानंतर मेटालाक्सिल किंवा मेफेनॉक्सम असलेले प्रणालीगत बुरशीनाशक वापरा. प्रत्येक 7-10 दिवसांनी पुन्हा लागू करा."
                    },
                    {
                        type: "सांस्कृतिक पद्धती",
                        content: "प्रमाणित रोगमुक्त बियाणे कंद लावा. कंदांचे संरक्षण करण्यासाठी योग्य हिलिंग वापरा. चांगला जलनिकास सुनिश्चित करा आणि अत्यधिक सिंचन टाळा. संक्रमित झाडे काढून टाका."
                    }
                ]
            },
            prevention: {
                en: [
                    "Plant certified disease-free seed tubers",
                    "Use resistant varieties when available",
                    "Ensure proper field drainage",
                    "Avoid excessive irrigation",
                    "Apply protectant fungicides before disease appears",
                    "Remove and destroy infected plant debris"
                ],
                mr: [
                    "प्रमाणित रोगमुक्त बियाणे कंद लावा",
                    "उपलब्ध असल्यास प्रतिरोधक जाती वापरा",
                    "योग्य शेत जलनिकास सुनिश्चित करा",
                    "अत्यधिक सिंचन टाळा",
                    "रोग दिसण्यापूर्वी संरक्षक बुरशीनाशक लावा",
                    "संक्रमित वनस्पतींचा कचरा काढून टाका"
                ]
            },
            medicines: [
                {
                    name: { en: "Metalaxyl", mr: "मेटालाक्सिल" },
                    image: "Metalaxyl.webp",
                    type: { en: "Systemic Fungicide", mr: "प्रणालीगत बुरशीनाशक" },
                    description: { en: "For late blight control", mr: "उशिरा लांडा नियंत्रणासाठी" }
                },
                {
                    name: { en: "Mancozeb", mr: "मॅन्कोझेब" },
                    image: "Mancozeb.jpg",
                    type: { en: "Protective Fungicide", mr: "संरक्षक बुरशीनाशक" },
                    description: { en: "Broad-spectrum protection", mr: "विस्तृत-स्पेक्ट्रम संरक्षण" }
                },
                {
                    name: { en: "Copper Hydroxide", mr: "कॉपर हायड्रॉक्साइड" },
                    image: "Copper Hydroxide.jpeg",
                    type: { en: "Protective Fungicide", mr: "संरक्षक बुरशीनाशक" },
                    description: { en: "For various fungal diseases", mr: "विविध बुरशीजन्य रोगांसाठी" }
                }
            ]
        }
    ],
    apple: [
        {
            name: { en: "Apple Scab", mr: "सफरचंद खरबूज" },
            description: { 
                en: "Apple scab is a fungal disease caused by Venturia inaequalis. It affects leaves, fruits, and young twigs, causing olive-green to black lesions on leaves and fruit, leading to premature leaf drop and fruit deformation.",
                mr: "सफरचंद खरबूज हा व्हेंच्युरिया इनॅक्वालिस या बुरशीमुळे होणारा एक बुरशीजन्य रोग आहे. हा रोग पाने, फळे आणि तरुण फांद्यांना प्रभावित करतो, ज्यामुळे पाने आणि फळांवर ऑलिव्ह-हिरव्या ते काळ्या रंगाचे घाव तयार होतात, ज्यामुळे पाने लवकर पडतात आणि फळांचे विकृतीकरण होते."
            },
            causalAgent: { en: "Venturia inaequalis", mr: "व्हेंच्युरिया इनॅक्वालिस" },
            affectedCrops: { en: "Apple, Crabapple", mr: "सफरचंद, क्रॅबऍपल" },
            symptoms: {
                en: [
                    "Olive-green to black velvety lesions on leaves",
                    "Lesions on fruit that become brown and corky",
                    "Premature leaf drop in severe infections",
                    "Fruit deformation and cracking"
                ],
                mr: [
                    "पानांवर ऑलिव्ह-हिरव्या ते काळ्या रंगाचे व्हेलव्हेटी घाव",
                    "फळांवर घाव जे तपकिरे आणि कॉर्की होतात",
                    "गंभीर संक्रमणात पाने लवकर पडणे",
                    "फळांचे विकृतीकरण आणि फुटणे"
                ]
            },
            treatment: {
                en: [
                    {
                        type: "Chemical Control",
                        content: "Apply protectant fungicides like captan or mancozeb before infection. Use systemic fungicides containing myclobutanil or tebuconazole after infection. Begin applications at green tip stage and continue through the season."
                    },
                    {
                        type: "Cultural Practices",
                        content: "Plant resistant varieties. Prune trees to improve air circulation and light penetration. Remove and destroy fallen leaves. Apply lime sulfur during dormancy."
                    }
                ],
                mr: [
                    {
                        type: "रासायनिक नियंत्रण",
                        content: "संक्रमणापूर्वी कॅप्टन किंवा मॅन्कोझेब सारखे संरक्षक बुरशीनाशक लावा. संक्रमणानंतर मायक्लोबुटानिल किंवा टेबुकोनाझोल असलेले प्रणालीगत बुरशीनाशक वापरा. ग्रीन टिप स्टेजपासून लागू करणे सुरू करा आणि हंगामभर चालू ठेवा."
                    },
                    {
                        type: "सांस्कृतिक पद्धती",
                        content: "प्रतिरोधक जाती लावा. वायू चक्रकरिता आणि प्रकाश प्रवेश सुधारण्यासाठी झाडांची छाटणी करा. पडलेली पाने काढून टाका. डॉरमन्सी दरम्यान लाइम सल्फर लावा."
                    }
                ]
            },
            prevention: {
                en: [
                    "Plant resistant apple varieties",
                    "Prune trees for good air circulation",
                    "Remove and destroy fallen leaves",
                    "Apply dormant season sprays",
                    "Use protectant fungicides before infection",
                    "Maintain proper tree nutrition"
                ],
                mr: [
                    "प्रतिरोधक सफरचंदाच्या जाती लावा",
                    "चांगल्या वायू चक्रकरिता झाडांची छाटणी करा",
                    "पडलेली पाने काढून टाका",
                    "डॉरमन्ट सीझन स्प्रे लावा",
                    "संक्रमणापूर्वी संरक्षक बुरशीनाशक वापरा",
                    "योग्य झाडांचे पोषण राखा"
                ]
            },
            medicines: [
                {
                    name: { en: "Captan", mr: "कॅप्टन" },
                    image: "Captan.jpeg",
                    type: { en: "Protective Fungicide", mr: "संरक्षक बुरशीनाशक" },
                    description: { en: "For apple scab and other fruit diseases", mr: "सफरचंद खरबूज आणि इतर फळ रोगांसाठी" }
                },
                {
                    name: { en: "Myclobutanil", mr: "मायक्लोबुटानिल" },
                    image: "Myclobutanil.jpeg",
                    type: { en: "Systemic Fungicide", mr: "प्रणालीगत बुरशीनाशक" },
                    description: { en: "For scab and powdery mildew", mr: "खरबूज आणि पाउडरी मिल्ड्यूसाठी" }
                },
                {
                    name: { en: "Tebuconazole", mr: "टेबुकोनाझोल" },
                    image: "Tebuconazole.webp",
                    type: { en: "Systemic Fungicide", mr: "प्रणालीगत बुरशीनाशक" },
                    description: { en: "For various fungal diseases", mr: "विविध बुरशीजन्य रोगांसाठी" }
                }
            ]
        }
    ]
};
        

        // Medicine database with detailed information
        const medicineDatabase = {
            chlorothalonil: {
                name: { en: "Chlorothalonil", mr: "क्लोरोथालोनिल" },
                image: "Chlorothalonil.jpg",
                category: "fungicide",
                badge: "badge-chemical",
                badgeText: "Fungicide",
                description: { 
                    en: "Chlorothalonil is a broad-spectrum organochlorine fungicide used to control fungal diseases in vegetables, fruits, and ornamental plants. It works by inhibiting fungal respiration and spore germination.",
                    mr: "क्लोरोथालोनिल हा भाजीपाला, फळे आणि सजावटीच्या झाडांमधील बुरशीजन्य रोगांवर नियंत्रण करण्यासाठी वापरला जाणारा एक विस्तृत-स्पेक्ट्रम ऑर्गॅनोक्लोरिन बुरशीनाशक आहे. हे बुरशीचे श्वासोच्छवास आणि स्पोर अंकुरण रोखून काम करते."
                },
                usage: { 
                    en: "Mix 2-3 ml of Chlorothalonil per liter of water and spray thoroughly on both sides of leaves. Apply at first sign of disease and repeat every 7-10 days. Do not apply more than 8 times per season.",
                    mr: "प्रति लिटर पाण्यात 2-3 मिली क्लोरोथालोनिल मिसळून पानांच्या दोन्ही बाजूंवर चांगले फवारा करा. रोगाची पहिली लक्षणे दिसल्यावर लागू करा आणि प्रत्येक 7-10 दिवसांनी पुन्हा करा. हंगामात जास्तीत जास्त 8 वेळा लागू करू नका."
                },
                precautions: { 
                    en: "Wear protective clothing, gloves, and mask during application. Avoid inhalation and skin contact. Do not apply during windy conditions. Keep away from children and pets. Wash hands thoroughly after use.",
                    mr: "वापरताना सुरक्षात्मक कपडे, हातमोजे आणि मास्क वापरा. श्वासोच्छवास आणि त्वचेचा संपर्क टाळा. वाऱ्याच्या परिस्थितीत लागू करू नका. मुले आणि पाळीव प्राण्यांपासून दूर ठेवा. वापरानंतर हात नक्की धुवा."
                },
                type: { en: "Protective", mr: "संरक्षक" }
            },
            neem_oil: {
                name: { en: "Neem Oil", mr: "नीम तेल" },
                image: "Neem Oil.jpg",
                category: "organic",
                badge: "badge-organic",
                badgeText: "Organic",
                description: { 
                    en: "Neem oil is a natural pesticide derived from the seeds of the neem tree. It contains azadirachtin, which disrupts the life cycle of insects and prevents fungal growth. It's safe for beneficial insects and the environment.",
                    mr: "नीम तेल हे नीम झाडाच्या बियांपासून मिळवलेले एक नैसर्गिक कीटकनाशक आहे. यामध्ये अझादिरॅक्टिन असते, जे कीटकांचे जीवनचक्र विक्षिप्त करते आणि बुरशीची वाढ रोखते. हे उपयुक्त कीटकांसाठी आणि पर्यावरणासाठी सुरक्षित आहे."
                },
                usage: { 
                    en: "Mix 5-10 ml of neem oil per liter of water with a few drops of mild soap as an emulsifier. Spray on affected plants in the early morning or late evening. Repeat every 7 days for best results.",
                    mr: "इमल्सिफायर म्हणून काही थेंब मृदू साबणासह प्रति लिटर पाण्यात 5-10 मिली नीम तेल मिसळा. सकाळी लवकर किंवा संध्याकाळी प्रभावित झाडांवर फवारा करा. सर्वोत्तम परिणामांसाठी प्रत्येक 7 दिवसांनी पुन्हा करा."
                },
                precautions: { 
                    en: "Test on a small area of the plant first to check for sensitivity. Avoid application during full sun or high temperatures. Keep away from children and pets. Store in a cool, dark place.",
                    mr: "संवेदनशीलता तपासण्यासाठी प्रथम झाडाच्या लहान भागावर चाचणी करा. पूर्ण सूर्यप्रकाश किंवा उच्च तापमानाच्या दरम्यान लागू करणे टाळा. मुले आणि पाळीव प्राण्यांपासून दूर ठेवा. थंड, अंधाऱ्या ठिकाणी साठवा."
                },
                type: { en: "Organic", mr: "जैविक" }
            },
            copper_fungicide: {
                name: { en: "Copper Fungicide", mr: "तांबे बुरशीनाशक" },
                image: "Copper Fungicide.webp",
                category: "fungicide",
                badge: "badge-chemical",
                badgeText: "Fungicide",
                description: { 
                    en: "Copper fungicide is a broad-spectrum protectant that controls fungal and bacterial diseases. It works by denaturing enzymes and proteins in pathogens. It's effective against early and late blight, leaf spot, and downy mildew.",
                    mr: "कॉपर बुरशीनाशक हा बुरशीजन्य आणि जिवाणूजन्य रोगांवर नियंत्रण करणारा एक विस्तृत-स्पेक्ट्रम संरक्षक आहे. हे रोगकारकांमधील एंझाइम्स आणि प्रथिने डिनॅचरिंग करून काम करते. हे लवकर आणि उशिरा लांडा, पानांवर ठिपके आणि डाउनी मिल्ड्यूवर प्रभावी आहे."
                },
                usage: { 
                    en: "Mix 2-3 teaspoons of copper fungicide per gallon of water. Apply as a fine spray, covering all plant surfaces. Begin application before disease appears and continue every 7-10 days during wet weather.",
                    mr: "प्रति गॅलन पाण्यात 2-3 चमचे कॉपर बुरशीनाशक मिसळा. सर्व वनस्पती पृष्ठभागांना झाकून बारीक फवारा म्हणून लागू करा. रोग दिसण्यापूर्वी लागू करणे सुरू करा आणि ओल्या हवामानात प्रत्येक 7-10 दिवसांनी सुरू ठेवा."
                },
                precautions: { 
                    en: "Wear protective clothing and gloves during application. Avoid application during flowering to prevent damage to pollinators. Do not apply when temperatures exceed 85°F (29°C). Keep away from water sources.",
                    mr: "वापरताना सुरक्षात्मक कपडे आणि हातमोजे घाला. परागीकरणाला हानी पोहोचवण्यापासून टाळण्यासाठी फुलण्याच्या काळात लागू करणे टाळा. तापमान 85°F (29°C) पेक्षा जास्त असताना लागू करू नका. पाण्याच्या स्त्रोतांपासून दूर ठेवा."
                },
                type: { en: "Bactericide", mr: "जिवाणूनाशक" }
            },
            mancozeb: {
                name: { en: "Mancozeb", mr: "मॅन्कोझेब" },
                image: "Mancozeb.jpg",
                category: "fungicide",
                badge: "badge-chemical",
                badgeText: "Fungicide",
                description: { 
                    en: "Mancozeb is a broad-spectrum contact fungicide that protects against a wide range of fungal diseases. It works by inhibiting spore germination and mycelial growth. It's commonly used on vegetables, fruits, and ornamental plants.",
                    mr: "मॅन्कोझेब हा विस्तृत-स्पेक्ट्रम संपर्क बुरशीनाशक आहे जो अनेक बुरशीजन्य रोगांपासून संरक्षण करतो. हे स्पोर अंकुरण आणि मायसेलियल वाढ रोखून काम करते. हे सामान्यतः भाजीपाला, फळे आणि सजावटीच्या झाडांवर वापरले जाते."
                },
                usage: { 
                    en: "Mix 2-3 teaspoons of Mancozeb per gallon of water. Apply as a thorough spray, covering all plant surfaces. Begin application at first sign of disease and repeat every 7-10 days as needed.",
                    mr: "प्रति गॅलन पाण्यात 2-3 चमचे मॅन्कोझेब मिसळा. सर्व वनस्पती पृष्ठभागांना झाकून संपूर्ण फवारा म्हणून लागू करा. रोगाची पहिली लक्षणे दिसल्यावर लागू करणे सुरू करा आणि आवश्यकतेनुसार प्रत्येक 7-10 दिवसांनी पुन्हा करा."
                },
                precautions: { 
                    en: "Wear protective clothing, gloves, and mask during application. Avoid inhalation and skin contact. Do not apply within 14 days of harvest. Keep away from children and pets. Wash hands thoroughly after use.",
                    mr: "वापरताना सुरक्षात्मक कपडे, हातमोजे आणि मास्क वापरा. श्वासोच्छवास आणि त्वचेचा संपर्क टाळा. काढण्यापूर्वी 14 दिवसांमध्ये लागू करू नका. मुले आणि पाळीव प्राण्यांपासून दूर ठेवा. वापरानंतर हात नक्की धुवा."
                },
                type: { en: "Protective", mr: "संरक्षक" }
            },
            kem_pesticide: {
                name: { en: "KEM Pesticide", mr: "केम पेस्टीसाईडस" },
                image: "kem.webp",
                category: "insecticide",
                badge: "badge-chemical",
                badgeText: "Insecticide",
                description: { 
                    en: "MBF Kem Insecticide is a water-soluble liquid formulation containing 1.9% Emamectin Benzoate as the active ingredient. It provides effective control against a wide range of sucking and chewing pests in various crops.",
                    mr: "MBF केम कीटकनाशक हे पाण्यात विरघळणारे द्रव स्वरूपातील उत्पादन आहे ज्यामध्ये 1.9% इमामेक्टिन बेंझोएट (Emamectin Benzoate) हे सक्रिय घटक आहे. हे विविध पिकांमधील अनेक चोषण आणि चर्वण कीटकांवर प्रभावी नियंत्रण प्रदान करते."
                },
                usage: { 
                    en: "Mix 0.4-0.8 ml of KEM pesticide per liter of water depending on pest pressure. Apply as a thorough foliar spray when pests are first observed. Repeat application after 10-15 days if necessary.",
                    mr: "कीटक दबावानुसार प्रति लिटर पाण्यात 0.4-0.8 मिली केम कीटकनाशक मिसळा. कीटक प्रथम दिसल्यावर संपूर्ण पानांवर फवारा म्हणून लागू करा. आवश्यक असल्यास 10-15 दिवसांनंतर पुन्हा लागू करा."
                },
                precautions: { 
                    en: "Wear protective clothing, gloves, and mask during application. Avoid inhalation and skin contact. Do not apply during flowering to protect pollinators. Do not apply within 7 days of harvest. Keep away from children and pets.",
                    mr: "वापरताना सुरक्षात्मक कपडे, हातमोजे आणि मास्क वापरा. श्वासोच्छवास आणि त्वचेचा संपर्क टाळा. परागीकरणाला संरक्षण देण्यासाठी फुलण्याच्या काळात लागू करू नका. काढण्यापूर्वी 7 दिवसांमध्ये लागू करू नका. मुले आणि पाळीव प्राण्यांपासून दूर ठेवा."
                },
                type: { en: "Insecticide", mr: "कीटकनाशक" }
            },
            carbendazim: {
                name: { en: "Carbendazim", mr: "कार्बेंडाझिम" },
                image: "carbendazim.webp",
                category: "fungicide",
                badge: "badge-chemical",
                badgeText: "Fungicide",
                description: { 
                    en: "Carbendazim is a systemic fungicide that provides both protective and curative action against a wide range of fungal diseases. It works by inhibiting fungal cell division and is effective against leaf spot, blight, and root rot.",
                    mr: "कार्बेंडाझिम हा एक प्रणालीगत बुरशीनाशक आहे जो अनेक बुरशीजन्य रोगांवर संरक्षक आणि बचावकारक दोन्ही क्रिया प्रदान करतो. हे बुरशीच्या पेशी विभाजनास प्रतिबंध करून काम करते आणि पानांवर ठिपके, लांडा आणि मूळ साडण्यावर प्रभावी आहे."
                },
                usage: { 
                    en: "Mix 1-2 grams of Carbendazim per liter of water. Apply as a thorough spray, covering all plant surfaces. Begin application at first sign of disease and repeat every 10-14 days as needed.",
                    mr: "प्रति लिटर पाण्यात 1-2 ग्रॅम कार्बेंडाझिम मिसळा. सर्व वनस्पती पृष्ठभागांना झाकून संपूर्ण फवारा म्हणून लागू करा. रोगाची पहिली लक्षणे दिसल्यावर लागू करणे सुरू करा आणि आवश्यकतेनुसार प्रत्येक 10-14 दिवसांनी पुन्हा करा."
                },
                precautions: { 
                    en: "Wear protective clothing and gloves during application. Avoid inhalation and skin contact. Do not apply within 21 days of harvest. Keep away from children and pets. Wash hands thoroughly after use.",
                    mr: "वापरताना सुरक्षात्मक कपडे आणि हातमोजे घाला. श्वासोच्छवास आणि त्वचेचा संपर्क टाळा. काढण्यापूर्वी 21 दिवसांमध्ये लागू करू नका. मुले आणि पाळीव प्राण्यांपासून दूर ठेवा. वापरानंतर हात नक्की धुवा."
                },
                type: { en: "Systemic", mr: "प्रणालीगत" }
            },
            imidacloprid: {
                name: { en: "Imidacloprid", mr: "इमिडाक्लोप्रिड" },
                image: "imidacloprid.webp",
                category: "insecticide",
                badge: "badge-chemical",
                badgeText: "Insecticide",
            description: { 
                    en: "Imidacloprid is a systemic insecticide that provides excellent control against sucking pests like aphids, whiteflies, and thrips. It works by interfering with the transmission of nerve impulses in insects.",
                    mr: "इमिडाक्लोप्रिड हा एक प्रणालीगत कीटकनाशक आहे जो अफिड्स, व्हाइटफ्लायज आणि थ्रिप्स सारख्या चोषण कीटकांवर उत्कृष्ट नियंत्रण प्रदान करतो. हे कीटकांमधील तंत्रिका प्रेरणांच्या संचारना अडथळा आणून काम करतो."
                },
                usage: { 
                    en: "Mix 0.5-1 ml of Imidacloprid per liter of water. Apply as a soil drench or foliar spray. Best applied early morning or late evening. Repeat every 14-21 days as needed.",
                    mr: "प्रति लिटर पाण्यात 0.5-1 मिली इमिडाक्लोप्रिड मिसळा. माती ड्रेन्च किंवा पानांवर फवारा म्हणून लागू करा. सकाळी लवकर किंवा संध्याकाळी लागू करणे सर्वोत्तम. आवश्यकतेनुसार प्रत्येक 14-21 दिवसांनी पुन्हा करा."
                },
                precautions: { 
                    en: "Wear protective clothing during application. Avoid application during flowering to protect pollinators. Do not apply within 21 days of harvest. Keep away from children and pets. Use integrated pest management practices.",
                    mr: "वापरताना सुरक्षात्मक कपडे घाला. परागीकरणाला संरक्षण देण्यासाठी फुलण्याच्या काळात लागू करू नका. काढण्यापूर्वी 21 दिवसांमध्ये लागू करू नका. मुले आणि पाळीव प्राण्यांपासून दूर ठेवा. एकत्रित कीटक व्यवस्थापन पद्धती वापरा."
                },
                type: { en: "Systemic", mr: "प्रणालीगत" }
            },
            glyphosate: {
                name: { en: "Glyphosate", mr: "ग्लायफोसेट" },
                image: "glyphosate.webp",
                category: "herbicide",
                badge: "badge-chemical",
                badgeText: "Herbicide",
                description: { 
                    en: "Glyphosate is a broad-spectrum systemic herbicide used to kill weeds, especially annual broadleaf weeds and grasses. It works by inhibiting the EPSP synthase enzyme in plants.",
                    mr: "ग्लायफोसेट हा एक विस्तृत-स्पेक्ट्रम प्रणालीगत शाकनाशक आहे जो आडवे नष्ट करण्यासाठी वापरला जातो, विशेषतः वार्षिक ब्रॉडलीफ आडवे आणि गवत. हे वनस्पतींमधील EPSP सिंथेज एंझाइमला प्रतिबंध करून काम करते."
                },
                usage: { 
                    en: "Mix 5-10 ml of Glyphosate per liter of water. Apply as a directed spray to actively growing weeds. Do not spray on desired crops. Best results when weeds are 6-8 inches tall.",
                    mr: "प्रति लिटर पाण्यात 5-10 मिली ग्लायफोसेट मिसळा. सक्रियपणे वाढणाऱ्या आडव्यांवर दिशाभूत फवारा म्हणून लागू करा. इच्छित पिकांवर फवार करू नका. आडवे 6-8 इंच उंच असताना सर्वोत्तम परिणाम."
                },
                precautions: { 
                    en: "Wear protective clothing and gloves. Avoid drift to desirable plants. Do not apply near water bodies. Wait 7 days before replanting treated areas. Keep away from children and pets.",
                    mr: "सुरक्षात्मक कपडे आणि हातमोजे घाला. इच्छित वनस्पतींवर ड्रिफ्ट टाळा. पाण्याच्या शरीरांजवळ लागू करू नका. उपचार केलेल्या क्षेत्रांत पुन्हा लावण्यापूर्वी 7 दिवस थांबा. मुले आणि पाळीव प्राण्यांपासून दूर ठेवा."
                },
                type: { en: "Non-selective", mr: "नॉन-सिलेक्टिव्ह" }
            },
            pyraclostrobin: {
                name: { en: "Pyraclostrobin", mr: "पायराक्लोस्ट्रोबिन" },
                image: "pyraclostrobin.webp",
                category: "fungicide",
                badge: "badge-chemical",
                badgeText: "Fungicide",
                description: { 
                    en: "Pyraclostrobin is a strobilurin fungicide that provides excellent control of leaf spots, blights, and rusts. It works by inhibiting mitochondrial respiration in fungi.",
                    mr: "पायराक्लोस्ट्रोबिन हा एक स्ट्रोबिलुरिन बुरशीनाशक आहे जो पानांवर ठिपके, लांडा आणि गवत यांवर उत्कृष्ट नियंत्रण प्रदान करतो. हे बुरशीमधील मायटोकॉन्ड्रियल श्वासोच्छवासास प्रतिबंध करून काम करते."
                },
                usage: { 
                    en: "Mix 0.5-1 ml of Pyraclostrobin per liter of water. Apply as a protective spray before disease development. Repeat every 7-14 days during disease-favorable conditions.",
                    mr: "प्रति लिटर पाण्यात 0.5-1 मिली पायराक्लोस्ट्रोबिन मिसळा. रोग विकसित होण्यापूर्वी संरक्षक फवारा म्हणून लागू करा. रोग-अनुकूल परिस्थितीत प्रत्येक 7-14 दिवसांनी पुन्हा करा."
                },
                precautions: { 
                    en: "Wear protective clothing during application. Rotate with other fungicide classes to prevent resistance. Do not apply more than 3 times per season. Keep away from children and pets.",
                    mr: "वापरताना सुरक्षात्मक कपडे घाला. प्रतिकार रोखण्यासाठी इतर बुरशीनाशक वर्गांसह फिरवा. हंगामात जास्तीत जास्त 3 वेळा लागू करू नका. मुले आणि पाळीव प्राण्यांपासून दूर ठेवा."
                },
                type: { en: "Protective", mr: "संरक्षक" }
            },
            thiamethoxam: {
                name: { en: "Thiamethoxam", mr: "थायामेथॉक्झाम" },
                image: "thiamethoxam.png",
                category: "insecticide",
                badge: "badge-chemical",
                badgeText: "Insecticide",
                description: { 
                    en: "Thiamethoxam is a systemic insecticide that provides rapid control of sucking and chewing insects. It works by binding to nicotinic acetylcholine receptors in insect nervous systems.",
                    mr: "थायामेथॉक्झाम हा एक प्रणालीगत कीटकनाशक आहे जो चोषण आणि चर्वण कीटकांवर त्वरित नियंत्रण प्रदान करतो. हे कीटकांच्या तंत्रिका प्रणालीमधील निकोटिनिक असेटायलकोलिन रिसेप्टर्सशी बांधून काम करतो."
                },
                usage: { 
                    en: "Mix 0.2-0.4 grams of Thiamethoxam per liter of water. Apply as a foliar spray or soil treatment. Best applied when pest pressure is low to moderate. Repeat every 10-14 days.",
                    mr: "प्रति लिटर पाण्यात 0.2-0.4 ग्रॅम थायामेथॉक्झाम मिसळा. पानांवर फवारा किंवा माती उपचार म्हणून लागू करा. कीटक दबाव कमी ते मध्यम असताना लागू करणे सर्वोत्तम. प्रत्येक 10-14 दिवसांनी पुन्हा करा."
                },
                precautions: { 
                    en: "Wear protective clothing during application. Avoid application during flowering. Do not apply within 30 days of harvest. Rotate with other insecticide classes. Keep away from children and pets.",
                    mr: "वापरताना सुरक्षात्मक कपडे घाला. फुलण्याच्या काळात लागू करणे टाळा. काढण्यापूर्वी 30 दिवसांमध्ये लागू करू नका. इतर कीटकनाशक वर्गांसह फिरवा. मुले आणि पाळीव प्राण्यांपासून दूर ठेवा."
                },
                type: { en: "Systemic", mr: "प्रणालीगत" }
            },
            atrazine: {
                name: { en: "Atrazine", mr: "अट्राझिन" },
                image: "atrazine.webp",
                category: "herbicide",
                badge: "badge-chemical",
                badgeText: "Herbicide",
                description: { 
                    en: "Atrazine is a selective herbicide used to control broadleaf and grassy weeds in corn, sorghum, and sugarcane. It works by inhibiting photosynthesis in susceptible plants.",
                    mr: "अट्राझिन हा मका, ज्वार आणि ऊस यांमधील ब्रॉडलीफ आणि ग्रासी आडवे नियंत्रित करण्यासाठी वापरला जाणारा एक निवडनिर्बाचक शाकनाशक आहे. हे संवेदनशील वनस्पतींमध्ये प्रकाशसंश्लेषणास प्रतिबंध करून काम करते."
                },
                usage: { 
                    en: "Mix 1-2 ml of Atrazine per liter of water. Apply pre-emergence or early post-emergence. Do not apply to stressed crops. Best results when applied before weeds emerge.",
                    mr: "प्रति लिटर पाण्यात 1-2 मिली अट्राझिन मिसळा. उदयोन्मुख पूर्वी किंवा लवकर उदयोन्मुख नंतर लागू करा. ताणावलेल्या पिकांवर लागू करू नका. आडवे उगवण्यापूर्वी लागू केल्यास सर्वोत्तम परिणाम."
                },
                precautions: { 
                    en: "Wear protective clothing during application. Do not apply near water bodies. May cause crop injury under stress conditions. Rotate with other herbicide classes. Keep away from children and pets.",
                    mr: "वापरताना सुरक्षात्मक कपडे घाला. पाण्याच्या शरीरांजवळ लागू करू नका. ताणावाच्या परिस्थितीत पिकांना नुकसान होऊ शकते. इतर शाकनाशक वर्गांसह फिरवा. मुले आणि पाळीव प्राण्यांपासून दूर ठेवा."
                },
                type: { en: "Selective", mr: "निवडनिर्बाचक" }
            },
            spirotetramat: {
                name: { en: "Spirotetramat", mr: "स्पायरोटेट्रामॅट" },
                image: "spirotetramat.webp",
                category: "insecticide",
                badge: "badge-chemical",
                badgeText: "Insecticide",
                description: { 
                    en: "Spirotetramat is a systemic insecticide with unique bidirectional movement in plants. It provides excellent control of sucking pests like aphids, whiteflies, and mealybugs.",
                    mr: "स्पायरोटेट्रामॅट हा वनस्पतींमध्ये अद्वितीय द्विदिश चळवळ असलेला एक प्रणालीगत कीटकनाशक आहे. हे अफिड्स, व्हाइटफ्लायज आणि मीलीबग्स सारख्या चोषण कीटकांवर उत्कृष्ट नियंत्रण प्रदान करतो."
                },
                usage: { 
                    en: "Mix 0.5-1 ml of Spirotetramat per liter of water. Apply as a foliar spray when pests are first observed. Provides both immediate and residual control. Repeat every 14-21 days.",
                    mr: "प्रति लिटर पाण्यात 0.5-1 मिली स्पायरोटेट्रामॅट मिसळा. कीटक प्रथम दिसल्यावर पानांवर फवारा म्हणून लागू करा. तात्काळ आणि अवशिष्ट दोन्ही नियंत्रण प्रदान करते. प्रत्येक 14-21 दिवसांनी पुन्हा करा."
                },
                precautions: { 
                    en: "Wear protective clothing during application. Avoid application during flowering. Do not apply within 30 days of harvest. Compatible with many other pesticides. Keep away from children and pets.",
                    mr: "वापरताना सुरक्षात्मक कपडे घाला. फुलण्याच्या काळात लागू करणे टाळा. काढण्यापूर्वी 30 दिवसांमध्ये लागू करू नका. अनेक इतर कीटकनाशकांसह सुसंगत. मुले आणि पाळीव प्राण्यांपासून दूर ठेवा."
                },
                type: { en: "Systemic", mr: "प्रणालीगत" }
            },
            boscalid: {
                name: { en: "Boscalid", mr: "बोस्कालिड" },
                image: "boscalid.webp",
                category: "fungicide",
                badge: "badge-chemical",
                badgeText: "Fungicide",
                description: { 
                    en: "Boscalid is a carboxamide fungicide that provides excellent control of powdery mildew, leaf spots, and botrytis. It works by inhibiting fungal respiration.",
                    mr: "बोस्कालिड हा एक कार्बोक्सामाइड बुरशीनाशक आहे जो पाउडरी मिल्ड्यू, पानांवर ठिपके आणि बॉट्रायटिसवर उत्कृष्ट नियंत्रण प्रदान करतो. हे बुरशीच्या श्वासोच्छवासास प्रतिबंध करून काम करते."
                },
                usage: { 
                    en: "Mix 0.5-1 ml of Boscalid per liter of water. Apply as a protective spray before disease development. Repeat every 7-14 days during disease-favorable conditions.",
                    mr: "प्रति लिटर पाण्यात 0.5-1 मिली बोस्कालिड मिसळा. रोग विकसित होण्यापूर्वी संरक्षक फवारा म्हणून लागू करा. रोग-अनुकूल परिस्थितीत प्रत्येक 7-14 दिवसांनी पुन्हा करा."
                },
                precautions: { 
                    en: "Wear protective clothing during application. Rotate with other fungicide classes to prevent resistance. Do not apply more than 4 times per season. Keep away from children and pets.",
                    mr: "वापरताना सुरक्षात्मक कपडे घाला. प्रतिकार रोखण्यासाठी इतर बुरशीनाशक वर्गांसह फिरवा. हंगामात जास्तीत जास्त 4 वेळा लागू करू नका. मुले आणि पाळीव प्राण्यांपासून दूर ठेवा."
                },
                type: { en: "Protective", mr: "संरक्षक" }
            },
            paraquat: {
                name: { en: "Paraquat", mr: "पाराक्वाट" },
                image: "paraquat.jpeg",
                category: "herbicide",
                badge: "badge-chemical",
                badgeText: "Herbicide",
                description: { 
                    en: "Paraquat is a non-selective contact herbicide used for rapid weed control. It works by generating reactive oxygen species that destroy plant cell membranes.",
                    mr: "पाराक्वाट हा त्वरित आडवे नियंत्रणासाठी वापरला जाणारा एक नॉन-सिलेक्टिव्ह संपर्क शाकनाशक आहे. हे प्रतिक्रियाशील ऑक्सिजन प्रजाती निर्माण करून वनस्पती पेशी आवरण नष्ट करते."
                },
                usage: { 
                    en: "Mix 5-10 ml of Paraquat per liter of water. Apply as a directed spray to actively growing weeds. Do not spray on desired crops. Best results on young, actively growing weeds.",
                    mr: "प्रति लिटर पाण्यात 5-10 मिली पाराक्वाट मिसळा. सक्रियपणे वाढणाऱ्या आडव्यांवर दिशाभूत फवारा म्हणून लागू करा. इच्छित पिकांवर फवार करू नका. तरुण, सक्रियपणे वाढणाऱ्या आडव्यांवर सर्वोत्तम परिणाम."
                },
                precautions: { 
                    en: "EXTREMELY TOXIC - Wear full protective equipment including respirator. Avoid all contact with skin and eyes. Do not apply near water bodies. Keep away from children and pets. Use extreme caution.",
                    mr: "अत्यंत विषाक्त - श्वासकव्याप सहित संपूर्ण सुरक्षात्मक उपकरणे वापरा. त्वचा आणि डोळ्यांशी सर्व संपर्क टाळा. पाण्याच्या शरीरांजवळ लागू करू नका. मुले आणि पाळीव प्राण्यांपासून दूर ठेवा. अत्यंत सावधानतेने वापरा."
                },
                type: { en: "Non-selective", mr: "नॉन-सिलेक्टिव्ह" }
            },
            propiconazole: {
                name: { en: "Propiconazole", mr: "प्रोपिकोनाझोल" },
                image: "propiconazole.webp",
                category: "fungicide",
                badge: "badge-chemical",
                badgeText: "Fungicide",
                description: { 
                    en: "Propiconazole is a triazole fungicide that provides both protective and curative action. It works by inhibiting sterol biosynthesis in fungi, affecting cell membrane formation.",
                    mr: "प्रोपिकोनाझोल हा एक ट्रायझोल बुरशीनाशक आहे जो संरक्षक आणि बचावकारक दोन्ही क्रिया प्रदान करतो. हे बुरशीमधील स्टेरॉल बायोसिंथेसिसला प्रतिबंध करून काम करते, ज्यामुळे पेशी आवरण निर्मितीवर परिणाम होतो."
                },
                usage: { 
                    en: "Mix 0.5-1 ml of Propiconazole per liter of water. Apply as a protective spray or at first sign of disease. Repeat every 14-21 days. Provides long-lasting protection.",
                    mr: "प्रति लिटर पाण्यात 0.5-1 मिली प्रोपिकोनाझोल मिसळा. संरक्षक फवारा म्हणून किंवा रोगाची पहिली लक्षणे दिसल्यावर लागू करा. प्रत्येक 14-21 दिवसांनी पुन्हा करा. दीर्घकालीन संरक्षण प्रदान करते."
                },
                precautions: { 
                    en: "Wear protective clothing during application. Rotate with other fungicide classes to prevent resistance. Do not apply within 30 days of harvest. Keep away from children and pets.",
                    mr: "वापरताना सुरक्षात्मक कपडे घाला. प्रतिकार रोखण्यासाठी इतर बुरशीनाशक वर्गांसह फिरवा. काढण्यापूर्वी 30 दिवसांमध्ये लागू करू नका. मुले आणि पाळीव प्राण्यांपासून दूर ठेवा."
                },
                type: { en: "Systemic", mr: "प्रणालीगत" }
            },
            acetamiprid: {
                name: { en: "Acetamiprid", mr: "असेटामिप्रिड" },
                image: "acetamiprid.jpg",
                category: "insecticide",
                badge: "badge-chemical",
                badgeText: "Insecticide",
                description: { 
                    en: "Acetamiprid is a neonicotinoid insecticide with low toxicity to mammals. It provides excellent control of sucking pests and is safe for beneficial insects when used properly.",
                    mr: "असेटामिप्रिड हा एक निओनिकोटिनॉइड कीटकनाशक आहे ज्याची सस्तनांसाठी विषाक्तता कमी आहे. हे चोषण कीटकांवर उत्कृष्ट नियंत्रण प्रदान करते आणि योग्यरित्या वापरल्यास उपयुक्त कीटकांसाठी सुरक्षित आहे."
                },
                usage: { 
                    en: "Mix 0.3-0.6 grams of Acetamiprid per liter of water. Apply as a foliar spray when pests are first observed. Best applied early morning or late evening. Repeat every 10-14 days.",
                    mr: "प्रति लिटर पाण्यात 0.3-0.6 ग्रॅम असेटामिप्रिड मिसळा. कीटक प्रथम दिसल्यावर पानांवर फवारा म्हणून लागू करा. सकाळी लवकर किंवा संध्याकाळी लागू करणे सर्वोत्तम. प्रत्येक 10-14 दिवसांनी पुन्हा करा."
                },
                precautions: { 
                    en: "Wear protective clothing during application. Avoid application during peak pollinator activity. Do not apply within 7 days of harvest. Keep away from children and pets.",
                    mr: "वापरताना सुरक्षात्मक कपडे घाला. परागीकरण करणाऱ्या क्रियाकलापाच्या शिखरावर लागू करणे टाळा. काढण्यापूर्वी 7 दिवसांमध्ये लागू करू नका. मुले आणि पाळीव प्राण्यांपासून दूर ठेवा."
                },
                type: { en: "Systemic", mr: "प्रणालीगत" }
            }
        
        };

        // Hero background image rotation
        let currentSlide = 0;
        const slides = document.querySelectorAll('.hero-slide');
        
        function rotateHeroBackground() {
            slides[currentSlide].classList.remove('active');
            currentSlide = (currentSlide + 1) % slides.length;
            slides[currentSlide].classList.add('active');
        }
        
        // Start rotation on page load
        setInterval(rotateHeroBackground, 5000);

        // Language switching functionality
        function changeLanguage(lang) {
            document.body.setAttribute('lang', lang);
            
            document.querySelectorAll('[data-en]').forEach(element => {
                const translation = element.getAttribute(`data-${lang}`);
                if (translation) {
                    if (element.innerHTML.includes('<i') || element.innerHTML.includes('<span')) {
                        const walker = document.createTreeWalker(
                            element,
                            NodeFilter.SHOW_TEXT,
                            null,
                            false
                        );
                        
                        let node;
                        while (node = walker.nextNode()) {
                            if (node.textContent.trim() === '') continue;
                            
                            const originalText = node.textContent.trim();
                            const originalEn = element.getAttribute('data-en');
                            const originalMr = element.getAttribute('data-mr');
                            
                            if (lang === 'en' && originalMr.includes(originalText)) {
                                const mrParts = originalMr.split(originalText);
                                const enParts = originalEn.split(mrParts[0]);
                                if (enParts.length > 1) {
                                    node.textContent = enParts[0];
                                }
                            } else if (lang === 'mr' && originalEn.includes(originalText)) {
                                const enParts = originalEn.split(originalText);
                                const mrParts = originalMr.split(enParts[0]);
                                if (mrParts.length > 1) {
                                    node.textContent = mrParts[0];
                                }
                            }
                        }
                    } else {
                        element.textContent = translation;
                    }
                }
            });
            
            document.getElementById('languageSelector').value = lang;
            document.getElementById('mobileLanguageSelector').value = lang;
            localStorage.setItem('selectedLanguage', lang);
        }
        
        // Initialize language from localStorage
        document.addEventListener('DOMContentLoaded', function() {
            const savedLanguage = localStorage.getItem('selectedLanguage') || 'en';
            changeLanguage(savedLanguage);
            initializeDiseaseGallery();
            initializeScrollAnimations();
            initializeMedicinesGrid();
        });
        
        // Mobile menu toggle
        function toggleMobileMenu() {
            const mobileMenu = document.getElementById('mobileMenu');
            mobileMenu.classList.toggle('hidden');
            if (!mobileMenu.classList.contains('hidden')) {
                mobileMenu.classList.add('mobile-menu-enter');
            }
        }
        
        // Initialize medicines grid
        function initializeMedicinesGrid() {
            const medicinesGrid = document.getElementById('medicinesGrid');
            
            Object.entries(medicineDatabase).forEach(([key, medicine]) => {
                const lang = document.body.getAttribute('lang');
                const card = document.createElement('div');
                card.className = 'medicine-card bg-white rounded-lg shadow-md overflow-hidden';
                card.dataset.category = medicine.category;
                card.innerHTML = `
                    <div class="medicine-badge ${medicine.badge}">${medicine.badgeText}</div>
                    <img src="${medicine.image}" alt="${medicine.name[lang]}" class="w-full h-48 object-cover">
                    <div class="p-4">
                        <h3 class="font-semibold text-lg mb-2">${medicine.name[lang]}</h3>
                        <p class="text-gray-600 text-sm mb-3">${medicine.description[lang]}</p>
                        <div class="flex justify-between items-center">
                            <span class="text-green-600 font-semibold">${medicine.type[lang]}</span>
                            <button class="text-green-600 hover:text-green-700" onclick="openMedicineModal('${key}')">
                                <i class="fas fa-arrow-right"></i>
                            </button>
                        </div>
                    </div>
                `;
                medicinesGrid.appendChild(card);
            });
        }
        
        // Filter medicines
        function filterMedicines(category) {
            const cards = document.querySelectorAll('.medicine-card');
            cards.forEach(card => {
                if (category === 'all' || card.dataset.category === category) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        }
        
        // Rating functionality
        let currentRating = 0;
        function setRating(rating) {
            currentRating = rating;
            const stars = document.querySelectorAll('.rating-btn i');
            stars.forEach((star, index) => {
                if (index < rating) {
                    star.classList.remove('text-gray-300');
                    star.classList.add('text-yellow-400');
                } else {
                    star.classList.remove('text-yellow-400');
                    star.classList.add('text-gray-300');
                }
            });
        }
        
        // Submit feedback
        function submitFeedback(event) {
            event.preventDefault();
            if (currentRating === 0) {
                alert(document.body.getAttribute('lang') === 'mr' ? 
                    'कृपया रेटिंग निवडा' : 
                    'Please select a rating');
                return;
            }
            
            const successMessage = document.body.getAttribute('lang') === 'mr' ? 
                'आपला अभिप्राय यशस्वीपणे पाठवला गेला! आपल्याला आपल्या अभिप्रायाबद्दल धन्यवाद आहे.' : 
                'Your feedback has been submitted successfully! Thank you for your valuable feedback.';
            
            alert(successMessage);
            event.target.reset();
            setRating(0);
        }
        
        // Modal functions
        function openMedicineModal(medicineKey) {
            const modal = document.getElementById('medicineModal');
            modal.classList.remove('hidden');
            
            const lang = document.body.getAttribute('lang');
            const medicine = medicineDatabase[medicineKey];
            
            document.getElementById('medicineModalTitle').textContent = medicine.name[lang];
            document.getElementById('medicineModalDescription').textContent = medicine.description[lang];
            document.getElementById('medicineModalUsage').textContent = medicine.usage[lang];
            document.getElementById('medicineModalPrecautions').textContent = medicine.precautions[lang];
            document.getElementById('medicineModalImage').src = medicine.image;
        }
        
        function closeMedicineModal() {
            document.getElementById('medicineModal').classList.add('hidden');
        }
        
        function openDiseaseModal(diseaseKey) {
    const modal = document.getElementById('diseaseModal');
    modal.classList.remove('hidden');
    
    const lang = document.body.getAttribute('lang');
    
    // Get the disease data from the database
    const diseases = diseaseDatabase[diseaseKey];
    if (!diseases || diseases.length === 0) {
        console.error('Disease not found:', diseaseKey);
        return;
    }
    
    const disease = diseases[0]; // Get the first disease from the array
    
    // Set modal title
    document.getElementById('diseaseModalTitle').textContent = disease.name[lang];
    document.getElementById('diseaseModalDescription').textContent = disease.description[lang];
    
    // Set modal image with fallback
    const modalImage = document.getElementById('diseaseModalImage');
    modalImage.src = disease.image || `Severity Level.png`;//changes today
    modalImage.onerror = function() {
        this.src = `Severity Level.png`;
    };
    
    // Set severity bar
    const severityPercent = Math.floor(Math.random() * 30) + 60; // Random between 60-90
    document.getElementById('diseaseSeverityBar').style.width = severityPercent + '%';
    const severityText = severityPercent > 80 ? 
        (lang === 'mr' ? 'अत्यंत गंभीर' : 'Very High') : 
        severityPercent > 60 ? 
        (lang === 'mr' ? 'गंभीर' : 'High') : 
        (lang === 'mr' ? 'मध्यम' : 'Medium');
    document.getElementById('diseaseSeverityText').textContent = severityText;
    
    // Populate symptoms
    const symptomsList = document.getElementById('diseaseModalSymptoms');
    symptomsList.innerHTML = '';
    disease.symptoms[lang].forEach(symptom => {
        const li = document.createElement('li');
        li.className = 'flex items-start';
        li.innerHTML = `
            <i class="fas fa-check-circle text-green-500 mt-1 mr-2"></i>
            <span>${symptom}</span>
        `;
        symptomsList.appendChild(li);
    });
    
    // Populate treatments
    const treatmentsContainer = document.getElementById('diseaseModalTreatments');
    treatmentsContainer.innerHTML = '';
    disease.treatment[lang].forEach(treatment => {
        const div = document.createElement('div');
        div.className = 'bg-gray-50 p-3 rounded-lg mb-3';
        div.innerHTML = `
            <h5 class="font-semibold mb-1 text-green-700">
                <i class="fas fa-capsules mr-2"></i>${treatment.type}
            </h5>
            <p class="text-sm text-gray-700">${treatment.content}</p>
        `;
        treatmentsContainer.appendChild(div);
    });
    
    // Populate prevention
    const preventionList = document.getElementById('diseaseModalPrevention');
    preventionList.innerHTML = '';
    disease.prevention[lang].forEach(prevention => {
        const li = document.createElement('li');
        li.className = 'flex items-start';
        li.innerHTML = `
            <i class="fas fa-shield-alt text-blue-500 mt-1 mr-2"></i>
            <span>${prevention}</span>
        `;
        preventionList.appendChild(li);
    });
}
        
        function closeDiseaseModal() {
            document.getElementById('diseaseModal').classList.add('hidden');
        }
        
        function openSupportModal() {
            document.getElementById('supportModal').classList.remove('hidden');
        }
        
        function closeSupportModal() {
            document.getElementById('supportModal').classList.add('hidden');
        }
        
        function openAboutModal() {
            document.getElementById('aboutModal').classList.remove('hidden');
        }
        
        function closeAboutModal() {
            document.getElementById('aboutModal').classList.add('hidden');
        }
        
        // Disease detection functions
        function handleDragOver(event) {
            event.preventDefault();
            event.currentTarget.classList.add('dragover');
        }
        
        function handleDrop(event) {
            event.preventDefault();
            event.currentTarget.classList.remove('dragover');
            
            const files = event.dataTransfer.files;
            if (files.length > 0) {
                handleImageFile(files[0]);
            }
        }
        
        function handleImageUpload(event) {
            const file = event.target.files[0];
            if (file) {
                handleImageFile(file);
            }
        }
        
        function handleImageFile(file) {
            if (!file.type.match('image.*')) {
                alert(document.body.getAttribute('lang') === 'mr' ? 
                    'कृपया प्रतिमा फाइल निवडा' : 
                    'Please select an image file');
                return;
            }
            
            const cropType = document.getElementById('cropType').value;
            if (!cropType) {
                alert(document.body.getAttribute('lang') === 'mr' ? 
                    'कृपया प्रथम पीक प्रकार निवडा' : 
                    'Please select a crop type first');
                return;
            }
            
            document.getElementById('loadingState').classList.remove('hidden');
            document.getElementById('resultsSection').classList.add('hidden');
            
            const reader = new FileReader();
            reader.onload = function(e) {
                document.getElementById('uploadedImage').src = e.target.result;
            };
            reader.readAsDataURL(file);
            
            setTimeout(() => {
                document.getElementById('loadingState').classList.add('hidden');
                document.getElementById('resultsSection').classList.remove('hidden');
                
                const diseases = diseaseDatabase[cropType] || [];
                const randomIndex = Math.floor(Math.random() * diseases.length);
                const disease = diseases[randomIndex];
                
                const lang = document.body.getAttribute('lang');
                const confidence = Math.floor(Math.random() * 14) + 85;
                
                document.getElementById('diseaseName').textContent = disease.name[lang];
                document.getElementById('diseaseDescription').textContent = disease.description[lang];
                document.getElementById('causalAgent').textContent = disease.causalAgent[lang];
                document.getElementById('affectedCrops').textContent = disease.affectedCrops[lang];
                document.getElementById('confidence').textContent = confidence + '%';
                document.getElementById('confidenceFill').style.width = confidence + '%';
                
                const symptomsList = document.getElementById('symptomsList');
                symptomsList.innerHTML = '';
                disease.symptoms[lang].forEach(symptom => {
                    const li = document.createElement('li');
                    li.className = 'flex items-start';
                    li.innerHTML = `
                        <i class="fas fa-check-circle text-green-500 mt-1 mr-2"></i>
                        <span>${symptom}</span>
                    `;
                    symptomsList.appendChild(li);
                });
                
                const treatmentContent = document.getElementById('treatmentContent');
                treatmentContent.innerHTML = '';
                disease.treatment[lang].forEach(treatment => {
                    const div = document.createElement('div');
                    div.className = 'bg-white p-4 rounded-lg shadow-sm';
                    div.innerHTML = `
                        <h5 class="font-semibold mb-2">${treatment.type}</h5>
                        <p>${treatment.content}</p>
                    `;
                    treatmentContent.appendChild(div);
                });
                
                const preventionList = document.getElementById('preventionList');
                preventionList.innerHTML = '';
                disease.prevention[lang].forEach(prevention => {
                    const li = document.createElement('li');
                    li.className = 'flex items-start';
                    li.innerHTML = `
                        <i class="fas fa-check-circle text-green-500 mt-1 mr-2"></i>
                        <span>${prevention}</span>
                    `;
                    preventionList.appendChild(li);
                });
                
                const medicinesContainer = document.getElementById('medicinesContainer');
                medicinesContainer.innerHTML = '';
                disease.medicines.forEach(medicine => {
                    const div = document.createElement('div');
                    div.className = 'bg-white rounded-lg shadow-md overflow-hidden';
                    div.innerHTML = `
                        <img src="${medicine.image}" alt="${medicine.name[lang]}" class="w-full h-48 object-cover">
                        <div class="p-4">
                            <h3 class="font-semibold text-lg mb-2">${medicine.name[lang]}</h3>
                            <p class="text-gray-600 text-sm mb-3">${medicine.description[lang]}</p>
                            <div class="flex justify-between items-center">
                                <span class="text-green-600 font-semibold">${medicine.type[lang]}</span>
                                <button class="text-green-600 hover:text-green-700" onclick="openMedicineModal('${medicine.name.en.toLowerCase().replace(/ /g, '_')}')">
                                    <i class="fas fa-arrow-right"></i>
                                </button>
                            </div>
                        </div>
                    `;
                    medicinesContainer.appendChild(div);
                });
                
                switchTab('overview');
            }, 2000);
        }
        
        // Tab switching function
        function switchTab(tabName) {
            document.querySelectorAll('.tab-content').forEach(tab => {
                tab.classList.add('hidden');
            });
            
            document.getElementById(tabName).classList.remove('hidden');
            
            document.querySelectorAll('#tabContent').forEach(tabContainer => {
                const buttons = tabContainer.parentElement.querySelectorAll('.border-b button');
                buttons.forEach(button => {
                    button.classList.remove('tab-active', 'border-b-2', 'border-green-600', 'text-green-600');
                    button.classList.add('text-gray-500');
                    
                    if (button.getAttribute('onclick').includes(tabName)) {
                        button.classList.add('tab-active', 'border-b-2', 'border-green-600', 'text-green-600');
                        button.classList.remove('text-gray-500');
                    }
                });
            });
        }
        
        // Initialize disease gallery
        function initializeDiseaseGallery() {
    const diseaseGalleryContainer = document.getElementById('diseaseGalleryContainer');
    
    const galleryDiseases = [
        {
            key: 'tomato',
            name: { en: 'Tomato Blight', mr: 'टोमॅटो लांडा' },
            description: { 
                en: 'Common fungal disease affecting tomato plants',
                mr: 'टोमॅटो झाडांना प्रभावित करणारा सामान्य बुरशीजन्य रोग'
            },
            image: 'Tomato Blight.jpg',
            severity: 75
        },
        {
            key: 'wheat',
            name: { en: 'Wheat Rust', mr: 'गहू गवत' },
            description: { 
                en: 'Fungal disease causing orange-brown pustules on wheat',
                mr: 'गहूवर नारिंगी-तपकिरी फुंके तयार करणारा बुरशीजन्य रोग'
            },
            image: 'Wheat Rust.jpg',
            severity: 65
        },
        {
            key: 'rice',
            name: { en: 'Rice Blast', mr: 'तांदूळ ब्लास्ट' },
            description: { 
                en: 'Serious fungal disease affecting rice plants',
                mr: 'तांदूळ झाडांना प्रभावित करणारा गंभीर बुरशीजन्य रोग'
            },
            image: 'Rice-Blast.jpg',
            severity: 80
        },
        {
            key: 'corn',
            name: { en: 'Northern Corn Leaf Blight', mr: 'उत्तरी मका पान लांडा' },
            description: { 
                en: 'Fungal disease causing long lesions on corn leaves',
                mr: 'मक्याच्या पानांवर लांब घाव तयार करणारा बुरशीजन्य रोग'
            },
            image: 'Northern Corn Leaf Blight.jpg',
            severity: 70
        },
        {
            key: 'potato',
            name: { en: 'Potato Late Blight', mr: 'बटाटा उशिरा लांडा' },
            description: { 
                en: 'Devastating disease affecting potato foliage and tubers',
                mr: 'बटाट्याच्या पानांना आणि कंदांना प्रभावित करणारा विनाशकारी रोग'
            },
            image: 'Potato Late Blight.jpg',
            severity: 85
        },
        {
            key: 'apple',
            name: { en: 'Apple Scab', mr: 'सफरचंद खरबूज' },
            description: { 
                en: 'Fungal disease causing lesions on apple leaves and fruit',
                mr: 'सफरचंदाच्या पानांवर आणि फळांवर घाव तयार करणारा बुरशीजन्य रोग'
            },
            image: 'Apple Scab.jpg',
            severity: 60
        }
    ];
              
    galleryDiseases.forEach(disease => {
        const lang = document.body.getAttribute('lang');
        const card = document.createElement('div');
        card.className = 'disease-card bg-white rounded-xl shadow-md overflow-hidden cursor-pointer transform transition duration-300 hover:scale-105';
        card.innerHTML = `
            <div class="relative h-48 overflow-hidden">
                <img src="${disease.image}" alt="${disease.name[lang]}" class="w-full h-full object-cover" onerror="this.src='https://picsum.photos/seed/${disease.key}/400/300.jpg'">
                <div class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4">
                    <h3 class="text-white font-bold text-xl">${disease.name[lang]}</h3>
                </div>
                <div class="absolute top-4 right-4">
                    <div class="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                        ${disease.severity}% ${lang === 'mr' ? 'गंभीर' : 'Severity'}
                    </div>
                </div>
            </div>
            <div class="p-4">
                <p class="text-gray-600 mb-4">${disease.description[lang]}</p>
                <div class="flex justify-between items-center">
                    <span class="text-green-600 font-medium">${lang === 'mr' ? 'अधिक माहिती' : 'Learn More'}</span>
                    <i class="fas fa-arrow-right text-green-600"></i>
                </div>
            </div>
        `;
        
        card.addEventListener('click', () => {
            openDiseaseModal(disease.key);
        });
        
        diseaseGalleryContainer.appendChild(card);
    });
}
        
        // Scroll animations
        function initializeScrollAnimations() {
            const observerOptions = {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px'
            };
            
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                    }
                });
            }, observerOptions);
            
            document.querySelectorAll('.fade-in').forEach(el => {
                observer.observe(el);
            });
        }
        
        // Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
        
        // Close modals on escape key
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape') {
                closeMedicineModal();
                closeDiseaseModal();
                closeSupportModal();
                closeAboutModal();
            }
        });
        
        // Close modals on outside click
        document.querySelectorAll('.modal').forEach(modal => {
            modal.addEventListener('click', function(e) {
                if (e.target === this) {
                    this.classList.add('hidden');
                }
            });
        });
    