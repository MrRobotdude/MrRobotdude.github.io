const products = [
  {
    productId: 1,
    bgImage: "background/clean-air-conditioner.jpg",
    productName: "Clean Air Conditioner",
    productDesc: [
      "Clean Air-Conditioner will provide a hygienic environment with excellent air quality for workplaces that are in a confined space. People who do activities mostly indoors (such as office building, hospitals, restaurants, malls, etc.) are more prone to have their health compromised due to viruses and bacterias in the air circulation. Therefore, cleaner and safer air quality should be top priority.",
      "Talking about health issue, especially in commercial building and any close area room, there is no air condition product that concerns the air quality that is breathed in and out by any living things in the closed system circulation. Our clean air condition is the first air condition cassette type that is using a HEPA / ILPA filter. By this filter, the target is to filter any bacteria, dust virus by the HEPA / ULPA Filter.",
      "There are 2 advantages of this product that others' do not have:",
      "1. The product will spread not only cool air and dehumidified, but also clean air. Resulting cleaner and healthier air environment inside the room.",
      "2. Talking other advantages is the air that is coming from the unit is a unidirectional flow, which makes the room cleaner.",
      "The product can be used by chiller system or by Direct Expansion system. Any of those will give a good clean and healthier air to be spread out through the room and filtered by HEPA / ULPA Filter.",
    ],
    generalSpecification: [
      {
        feature: "Capacity",
        value: "10.000 - 50.000 Btuh",
      },
      {
        feature: "Filter",
        value: "ULPA U15 / HEPA H13 / HEPA H14",
      },
      {
        feature: "Air Flow",
        value: "300 - 1500 Cfm",
      },
      {
        feature: "Material",
        value: "Galvanil Powder Coating",
      },
    ],
    imageUrl: [
      {
        url: "product/Clean Air Condition.jpg",
      },
    ],
    pdfUrl: "assets/pdf/Clean AC/ATS Brochure Clean AC FA Final OK.pdf",
  },
  {
    productId: 2,
    bgImage: "background/precision-humidifier.jpg",
    productName: "Dehumidifier",
    productDesc: [
      "Dehumidifier is a unit that will condition the moisture inlet air so that the outlet air will have a certain targeted moisture content. Out product system is by outing the inlet temperature down, until it condensates and resulting the decrement of moisture content of the process air, then it will be heated up in order to get certain humidity.",
      "By the fact that total calories to regenerate dehumidifier media, for melting ice is less than the heat to evaporate water, out product will give more efficient regarding the power consumption for dehumidifying unit",
      "1g of ice requires 80 calories to melt.",
      "1g of water requires 540 calories to evaporate.",
      "For direct expansion system, not only it can be more efficient in the way it was stated above, but also our product will use the 'waste' outdoor heat in order to help reheating the air so that has it will help to reheat the air.",
    ],
    generalSpecification: [
      {
        feature: "Capacity",
        value: "50.000 Btuh - 2.000.000 Btuh",
      },
      {
        feature: "Air Flow",
        value: "500 cfm - 60.000 Cfm",
      },
      {
        feature: "Filter",
        value: "Pre G4/ Medium (F6 - F9) / HEPA (H13)",
      },
      {
        feature: "Heating",
        value: "Hot Gas / Steam Coil / Hot Water  Coil / Electric Heater",
      },
      {
        feature: "Cooling",
        value: "Chiller / Direct Expansion",
      },
    ],
    imageUrl: [
      {
        url: "product/dehumidifier/Dehumidifier 2 edit.jpg",
      },
      {
        url: "product/dehumidifier/Dehumidifier 3 edit.jpg",
      },
      {
        url: "product/dehumidifier/Dehumidifier edit.jpg",
      },
    ],
    pdfUrl: "assets/pdf/dehumidifier/OK Brochure Dehumidifier NEW 2020.pdf",
  },
  {
    productId: 3,
    bgImage: "background/air-handling-unit.jpg",
    productName: "Direct Expansion / Chiller Air Handling Unit (AHU)",
    productDesc: [
      "Concerning about the air quality of a building, storage, process room in industry or any other enclose room, our air handling unit will provide any inquiries regarding air parameter.",
      "Temperature, Humidity, Pressurized room / chamber, Clean room facility, fresh Air Unit, Etc.",
      "By using out technology of Bag in Bag out unit, low noise level, low vibration level, no thermal bridge and could be combine with Human Machine interface and Building Automation system, our Air Handling Unit product will definitely five the best output and solution. Not Just by the parameters required, but also resulting in clean condition and also energy efficiency.",
      "Our air handling unit will guarantee that there will be no condensation happen in outside of indoor unit",
    ],
    generalSpecification: [
      {
        feature: "Capacity",
        value: "50.000 Btuh - 2.000.000 Btuh",
      },
      {
        feature: "Air Flow",
        value: "500 cfm - 60.000 Cfm",
      },
      {
        feature: "Filter",
        value: "Pre G4/ Medium (F6 - F9) / HEPA (H13)",
      },
      {
        feature: "Cooling",
        value: "Chiller / Direct Expansion",
      },
    ],
    imageUrl: [
      {
        url: "product/Direct Expansion AHU/Direct Expansion AHU 1 edit.jpg",
      },
      {
        url: "product/Direct Expansion AHU/Direct Expansion AHU (2) edit.jpg",
      },
      {
        url: "product/Direct Expansion AHU/Direct Expansion  Chiller Air Handling Unit (AHU) Edit.jpg",
      },
    ],
    pdfUrl: "assets/pdf/AHU/OK Brochure AHU NEW 2020.pdf",
  },
  {
    productId: 4,
    bgImage: "background/cold-storage.jpg",
    productName: "Cool & Dry Storage Refrigeration",
    productDesc: [
      "Storing material or product, could be tricky sometimes. Usually for keeping material or product, the parameter required is temperature only. However, sometimes, when the product or material is in open condition, without any primary packaging, then sometimes it needs also humidity parameter.",
      "Our product called as cool dry storage refrigeration, not only could provide low temperature parameter, but also lower and controllable humidity parameter.",
    ],
    generalSpecification: [
      {
        feature: "Capacity",
        value: "50.000 Btuh - 400.000 Btuh",
      },
      {
        feature: "Cooling",
        value: "Chiller / Direct Expansion",
      },
      {
        feature: "Heating",
        value: "Hot Gas / Steam Coil / Hot Water  Coil / Electric Heater",
      },
    ],
    imageUrl: [
      {
        url: "product/refrigration/refrigeration.png",
      },
    ],
    pdfUrl: "assets/pdf/storage/OK Brochure Cold Storage NEW 2020.pdf",
  },
  {
    productId: 5,
    bgImage: "background/cold-storage.jpg",
    productName: "Stability Test",
    productDesc: [
      "Having trouble with such narrow tolerance in temperature and Humidity? Our product could deliver with 2oC of tolerance and 5% humidity tolerance.",
      "Commonly stability test unit exist in such a small cabinet, but with our product, the cabinet can be expanded into a room. Not only efficient in energy, but also efficient in budget.",
    ],
    generalSpecification: [
      {
        feature: "Capacity",
        value: "18m3 - 300m3",
      },
      {
        feature: "Filter",
        value: "Pre G4",
      },
      {
        feature: "Temperature Range",
        value: "± 2oC",
      },
      {
        feature: "Humidity Range",
        value: "± 5% RH",
      },
    ],
    imageUrl: [
      {
        url: "product/stability/Stability Test 5 edit.jpg",
      },
      {
        url: "product/stability/Stability Test 6 edit.jpg",
      },
    ],
    pdfUrl: "assets/pdf/Clean AC/ATS Brochure Clean AC FA Final OK.pdf",
  },
  {
    productId: 6,
    bgImage: "background/air-handling-unit.jpg",
    productName: "Laminar Air Flow / Sampling Booth / Weighing Booth (Idem)",
    productDesc: [
      "Laminar air flow is a device that is needed in order to make sure that any process being done in such a very clean environment class 100, either in process condition or in rest condition.",
      "Our laminar air flow will guaranteed that the flow coming from the unit will be 0.36 - 0.56 m/s",
      "Also all the laminar air flow unit will have an integrity test. Stainless steel 304 for body structure will make sure that the hygiene, cleaness and sterility of the air pass through the unit will be maintained.",
      "Underneath the laminar air flow will be installed the 500 lux minimum at working area table top and also anti static plastic curtain to make sure that no dust attached to the plastic curtain, and also to make sure that the flow is in the right direction.",
    ],
    generalSpecification: [
      {
        feature: "Capacity",
        value: "Customized",
      },
      {
        feature: "Filter",
        value: "HEPA H14",
      },
      {
        feature: "Material",
        value: "Stainless Steel 304 / Powder Coating",
      },
    ],
    imageUrl: [
      {
        url: "product/Laminar Air Flow edit.jpg",
        caption: "",
      },
    ],
    pdfUrl: "assets/pdf/Clean AC/ATS Brochure Clean AC FA Final OK.pdf",
  },
  {
    productId: 7,
    bgImage: "background/cold-storage.jpg",
    productName: "Water / Brine Chiller",
    productDesc: [
      "Our cost-efficient chiller will provide the chilled water with such low energy produced. Also, if needed, could be combined with any Building Automation System.",
      "We use several types of compressor, such as scroll hermetic compressor, reciprocating hermetic compressor, reciprocating semi hermetic compressor and screw compressor. All these type compressors are based on the capacity required.",
      "For the scroll compressor, it could have inverter combination, as a result the capacity of the compressor could vary between ± 20% of normal capacity.",
    ],
    generalSpecification: [
      {
        feature: "Capacity",
        value: "100.000 Btuh - 3.600.000 Btuh",
      },
      {
        feature: "Compressor",
        value: "Scroll / Reciprocating / Screw Compressor",
      },
      {
        feature: "Condenser Type",
        value: "Air Cooled / water cooled",
      },
      {
        feature: "Body",
        value: "Modular",
      },
    ],
    imageUrl: [
      {
        url: "product/chiller/chiller1 edit.jpg",
      },
      {
        url: "product/chiller/chiller2 edit.jpg",
      },
      {
        url: "product/chiller/chiller3 edit.jpg",
      },
    ],
    pdfUrl: "assets/pdf/Clean AC/ATS Brochure Clean AC FA Final OK.pdf",
  },
  {
    productId: 8,
    bgImage: "background/clean-air-conditioner.jpg",
    productName: "Bag / Scrubber Dust Collector",
    productDesc: [
      "Dust collection in some process activity become very crucial, since due to room cleanness, dust will lower machine reliability and will cause a cross contamination, and etc. But handling dust sometimes can be tricky, it could be needed at dry or wet condition. Different type of material being collected, different type of dust collector needed.",
      "In our product, the dust collector will give a very strong air flow in order to make sure that dust which is stucked in the ducting will be least.",
    ],
    generalSpecification: null,
    imageUrl: [
      {
        url: "product/Scrubber Dust Collector.jpg",
      },
    ],
    pdfUrl: "assets/pdf/Clean AC/ATS Brochure Clean AC FA Final OK.pdf",
  },
  {
    productId: 9,
    bgImage: "background/cold-storage.jpg",
    productName: "Timber Kiln / Dryer",
    productDesc: [
      "Drying process parameter needed is temperature and humidity. These two parameters could be provide by Air Handling Unit. The only thing that it makes different with Air Handling unit in process room, storage, commercial building is that the temperature is higher but the humidity is as low as possible.",
      "Talking about temperature in timber kiln dryer, may achieved until at least 32oC, with Humidity at maximum at 30% (still need to be adjusted based on the type of the product inside)",
    ],
    generalSpecification: [
      {
        feature: "Capacity",
        value: "50.000 Btuh - 2.000.000 Btuh",
      },
      {
        feature: "Air Flow",
        value: "500 cfm - 60.000 Cfm",
      },
      {
        feature: "Filter",
        value: "Pre G4",
      },
      {
        feature: "Heating",
        value: "Hot Gas / Steam Coil / Hot Water  Coil / Electric Heater",
      },
      {
        feature: "Cooling",
        value: "Chiller / Direct Expansion",
      },
    ],
    imageUrl: [
      {
        url: "product/timber kiln.png",
      },
    ],
    pdfUrl: "assets/pdf/Clean AC/ATS Brochure Clean AC FA Final OK.pdf",
  },
];

export { products };
