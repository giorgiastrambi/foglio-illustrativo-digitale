import LanguageSelector from "@/components/LanguageSelector";
import { Accordion } from "@/components/ui/accordion";
import CustomAccordion from "@/components/ui/custom-accordion";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="bg-gradient">
        <header className="flex w-full justify-between items-center">
          <div className="p-4 w-full flex items-center justify-between">
            <div>
              <Image
                src="/images/augmentin_logo_esteso.png"
                alt="logo"
                width={150}
                height={100}
              />
            </div>

            <LanguageSelector />
          </div>
        </header>

        <main className="flex h-full flex-col p-4">
          <Accordion type="multiple" className="flex flex-col gap-2">
            <CustomAccordion
              value="item-1"
              title="1. WHAT AUGMENTIN IS AND WHAT IS USED FOR"
            >
              <div>
                Augmentin is an antibiotic and works by killing bacteria that
                cause infections. It contains two different medicines called
                amoxicillin and clavulanic acid. Amoxicillin belongs to a group
                of medicines called “penicillins” that can sometimes be stopped
                from working (made inactive). The other active component
                (clavulanic acid) stops this from happening. Augmentin is used
                in adults and children to treat the following infections:
              </div>
              <ul>
                <li>Middle ear and sinus infections </li>
                <li>respiratory tract infections </li>
                <li>urinary tract infections </li>
                <li>
                  skin and soft tissue infections including dental infections
                </li>
                <li>bone and joint infections.</li>
              </ul>
              <div className="text-brand-red">What Augmentin contains</div>
              <div>
                The active substances are amoxicillin and clavulanic acid. Each
                tablet contains amoxicillin trihydrate equivalent to 875 mg
                amoxicillin and potassium clavulanate equivalent to 125 mg of
                clavulanic acid. The other ingredients are: magnesium stearate,
                Sodium carboxymethyl starch (Type A), colloidal anhydrous
                silica, microcrystalline cellulose, Titanium dioxide (E171),
                hypromellose 2506/5 and 2506/15, macrogol 4000 and 6000 and
                dimeticone.
              </div>
              <div className="text-brand-red">
                What Augmentin looks like and contents of the pack
              </div>
              <div>
                Augmentin 875 mg/125 mg film-coated tablets are white to
                off-white, capsule shaped tablets debossed with “AC” on both
                sides and a scoreline on one side.
              </div>
            </CustomAccordion>

            <CustomAccordion
              value="item-2"
              title="2. WHAT YOU NEED TO KNOW BEFORE YOU TAKE AUGMENTIN"
            >
              <div className="text-brand-red">Advice/medical education </div>
              <div>
                Antibiotics are used to treat infections caused by bacteria.
                They have no effect against infections caused by viruses.
                Sometimes an infection caused by bacteria does not respond to a
                course of an antibiotic. One of the commonest reasons for this
                to occur is because the bacteria causing the infection are
                resistant to the antibiotic that is being taken. This means that
                they can survive and even multiply despite the antibiotic.
                <br />
                Bacteria can become resistant to antibiotics for many reasons.
                Using antibiotics carefully can help to reduce the chance of
                bacteria becoming resistant to them. When your doctor prescribes
                a course of an antibiotic it is intended to treat only your
                current illness.
                <br />
                Paying attention to the following advice will help prevent the
                emergence of resistant bacteria that could stop the antibiotic
                working.
              </div>
              <ol>
                <li>
                  It is very important that you take the antibiotic at the right
                  dose, at the right times and for the right number of days.
                  Read the instructions on the label and if you do not
                  understand anything ask your doctor or pharmacist to explain.
                </li>
                <li>
                  You should not take an antibiotic unless it has been
                  prescribed specifically for you and you should use it only to
                  treat the infection for which it was prescribed.
                </li>
                <li>
                  You should not take antibiotics that have been prescribed for
                  other people even if they had an infection that was similar to
                  yours.
                </li>
                <li>
                  You should not give antibiotics that were prescribed for you
                  to other people.
                </li>
                <li>
                  If you have any antibiotic left over when you have taken the
                  course as directed by your doctor you should take the the
                  remainder to a pharmacy for appropriate disposal.
                </li>
              </ol>
              <div className="text-brand-red">Do not take Augmentin: </div>
              <ul>
                <li>
                  if you are allergic to amoxicillin, clavulanic acid,
                  penicillin or any of the other ingredients of this medicine
                  (listed in section 6).
                </li>
                <li>
                  if you have ever had a severe allergic reaction to any other
                  antibiotic. This can include a skin rash or swelling of the
                  face or throat.
                </li>
                <li>
                  if you have ever had liver problems or jaundice (yellowing of
                  the skin) when taking an antibiotic.
                </li>
              </ul>
              <div className="text-brand-red">
                Talk to your doctor or pharmacist before taking Augmentin if
                you:
              </div>
              <ul>
                <li>have glandular fever </li>
                <li>are being treated for liver or kidney problems </li>
                <li>are not passing water regularly.</li>
              </ul>

              <div>
                If you are not sure if any of the above apply to you, talk to
                your doctor or pharmacist before taking Augmentin. In some
                cases, your doctor may investigate the type of bacteria that is
                causing your infection. Depending on the results, you may be
                given a different strength of Augmentin or a different medicine.
                Conditions you need to look out for Augmentin can make some
                existing conditions worse, or cause serious side effects.
              </div>
              <div>
                These include allergic reactions, convulsions (fits) and
                inflammation of the large intestine. You must look out for
                certain symptoms while you are taking Augmentin, to reduce the
                risk of any problems. See ‘Conditions you need to look out for’
                in Section 4.
              </div>
              <div className="text-brand-red">Blood and urine tests</div>
              <div>
                If you are having blood tests (such as red blood cell status
                tests or liver function tests) or urine tests (for glucose), let
                the doctor or nurse know that you are taking Augmentin. This is
                because Augmentin can affect the results of these types of
                tests.
              </div>
              <div className="text-brand-red">
                Other medicines and Augmentin
              </div>
              <div>
                Tell your doctor or pharmacist if you are using or have recently
                used or might use any other medicines.
              </div>
              <div>
                If you are taking allopurinol (used for gout) with Augmentin, it
                may be more likely that you will have an allergic skin reaction.
              </div>
              <div>
                If you are taking probenecid (used for gout), your doctor may
                decide to adjust your dose of Augmentin.
              </div>
              <div>
                If medicines to help stop blood clots (such as warfarin) are
                taken with Augmentin then extra blood tests may be needed.
                Augmentin can affect how methotrexate (a medicine used to treat
                cancer or rheumatic diseases) works.
              </div>
              <div>
                Augmentin can affect how mycophenolate mofetil (a medicine used
                to prevent the rejection of transplanted organs) works.
              </div>
              <div className="text-brand-red">
                Pregnancy, breast-feeding and fertility
              </div>
              <div>
                If you are pregnant or breast-feeding, think you may be pregnant
                or are planning to have a baby, ask your doctor or pharmacist
                for advice before taking this medicine.
              </div>
              <div className="text-brand-red">Driving and using machines</div>
              <div>
                Augmentin can have side effects and the symptoms may make you
                unfit to drive. Do not drive or operate machinery unless you are
                feeling well.
              </div>
            </CustomAccordion>

            <CustomAccordion value="item-3" title="3. HOW TO TAKE AUGMENTIN">
              <div className="text-brand-red">
                Always take this medicine exactly as your doctor or pharmacist
                has told you. Check with your doctor or pharmacist if you are
                not sure.
              </div>
              <div>Adults and children weighing 40 kg and over</div>
              <ul>
                <li> Usual dose - 1 tablet two times a day</li>
                <li> Higher dose - 1 tablet three times a day</li>
              </ul>

              <div className="text-brand-red">
                Children weighing less than 40 kg
              </div>
              <div>
                Children aged 6 years or less should preferably be treated with
                Augmentin oral suspension or sachets.
              </div>
              <div>
                Ask your doctor or pharmacist for advice when giving Augmentin
                tablets to children weighing less than 40 kg. The tablets are
                not suitable for children weighing less than 25 kg.
              </div>

              <div className="text-brand-red">
                Patients with kidney and liver problems
              </div>

              <ul>
                <li>
                  If you have kidney problems the dose might be changed. A
                  different strength or a different medicine may be chosen by
                  your doctor.
                </li>
                <li>
                  If you have liver problems you may have more frequent blood
                  tests to check how your liver is working.
                </li>
              </ul>

              <div className="text-brand-red">How to take Augmentin</div>

              <ul>
                <li>
                  Swallow the tablets whole with a glass of water with a meal.
                  Tablets can be broken along the score line to make them easier
                  to swallow. You must take both pieces of the tablet at the
                  same time.
                </li>
                <li>
                  Space the doses evenly during the day, at least 4 hours apart.
                  Do not take 2 doses in 1 hour.
                </li>
                <li>
                  Do not take Augmentin for more than 2 weeks. If you still feel
                  unwell you should go back to see the doctor.
                </li>
              </ul>
              <div className="text-brand-red">
                If you take more Augmentin than you should
              </div>
              <div>
                If you take too much Augmentin, signs might include an upset
                stomach (feeling sick, being sick or diarrhoea) or convulsions.
                Talk to your doctor as soon as possible. Take the medicine
                carton or bottle to show the doctor.
              </div>

              <div className="text-brand-red">
                If you forget to take Augmentin
              </div>
              <div>
                If you forget to take a dose, take it as soon as you remember.
                You should not take the next dose too soon, but wait about 4
                hours before taking the next dose. Do not take a double dose to
                make up for a forgotten dose.
              </div>

              <div className="text-brand-red">If you stop taking Augmentin</div>
              <div>
                Keep taking Augmentin until the treatment is finished, even if
                you feel better. You need every dose to help fight the
                infection. If some bacteria survive they can cause the infection
                to come back. If you have any further questions on the use of
                this medicine, ask your doctor or pharmacist.
              </div>
            </CustomAccordion>

            <CustomAccordion value="item-4" title="4. HOW TO STORE AUGMENTIN">
              <div>
                Keep this medicine out of the sight and reach of children.
                <br />
                Do not use this medicine after the expiry date which is stated
                on the carton and blister after EXP. The expiry date refers to
                the last day of that month
                <br />
                Tablets supplied in pouches should be used within 30 days of
                opening the pouch. Store in the original package in order to
                protect from moisture.
                <br />
                Do not use if the tablets are chipped or damaged. Do not throw
                <br />
                away any medicines via wastewater or household waste. Ask your
                pharmacist how to throw away medicines you no longer use. These
                measures will help protect the environment.
              </div>
            </CustomAccordion>
            <CustomAccordion value="item-5" title="5. POSSIBLE SIDE EFFECTS">
              <div>
                Like all medicines, this medicine can cause side effects,
                although not everybody gets them.
              </div>
              <div>The side effects below may happen with this medicine.</div>
              <div className="text-brand-red">Allergic reactions</div>
              <ul>
                <li> skin rash</li>
                <li>
                  inflammation of blood vessels (vasculitis) which may be
                  visible as red or purple raised spots on the skin, but can
                  affect other parts of the body
                </li>
                <li>
                  fever, joint pain, swollen glands in the neck, armpit or groin
                </li>
                <li>
                  swelling, sometimes of the face or throat (angioedema),
                  causing difficulty in breathing
                </li>
                <li>Collapse</li>
              </ul>

              <div className="text-brand-red font-bold">
                → Contact a doctor immediately if you get any of these symptoms.
              </div>
              <br />
              <div className="text-brand-red">Stop taking Augmentin</div>
              <div>Inflammation of the large intestine</div>
              <div>
                Inflammation of the large intestine, causing watery diarrhoea
                usually with blood and mucus, stomach pain and/or fever.
              </div>
              <div className="text-brand-red font-bold">
                → Contact your doctor as soon as possible for advice if you get
                these symptoms.
              </div>
              <br />
              <div className="text-brand-red">
                Very common side effects. These may affect more than 1 in 10
                people
              </div>
              <ul>
                <li>Diarrhea (in adults).</li>
              </ul>
              <div className="text-brand-red">
                Common side effects. These may affect up to 1 in 10 people
              </div>
              <ul>
                <li>
                  thrush (candida - a yeast infection of the vagina, mouth or
                  skin folds)
                </li>
                <li>
                  feeling sick (nausea), especially when taking high doses
                </li>
                <li>vomiting</li>
                <li>diarrhea (in children).</li>
              </ul>

              <div className="text-brand-red">
                Uncommon side effects. These may affect up to 1 in 100 people
              </div>

              <ul>
                <li>skin rash, itching</li>
                <li>raised itchy rash (hives)</li>
                <li>indigestion</li>
                <li>dizziness</li>
                <li>headache</li>
              </ul>

              <div className="text-brand-red">
                Uncommon side effects that may show up in your blood tests
              </div>
              <div>
                Increase in some substances (enzymes) produced by the liver.
              </div>
              <div className="text-brand-red">
                Rare side effects. These may affect up to 1 in 1000 people
              </div>
              <ul>
                <li>
                  skin rash, which may blister, and looks like small targets
                  (central dark spots surrounded by a paler area, with a dark
                  ring around the edge - erythema multiforme).
                </li>
              </ul>
              <div>
                If you notice any of these symptoms contact a doctor urgently
              </div>
              <div>Rare side effects that may show up in your blood tests:</div>
              <ul>
                <li>low number of cells involved in blood clotting</li>
                <li>low number of white blood cells.</li>
              </ul>

              <div className="text-brand-red">Frequency not known</div>
              <p>Frequency cannot be estimated from the available data.</p>
              <ul>
                <li>Allergic reactions (see above)</li>
                <li>Inflammation of the large intestine (see above)</li>
                <li>
                  {" "}
                  Inflammation of the protective membrane surrounding the brain
                  (aseptic meningitis).
                </li>
                <li>Serious skin reactions:</li>
                <ul>
                  <li>
                    a widespread rash with blisters and peeling skin,
                    particularly around the mouth, nose, eyes and genitals
                    (Stevens-Johnson syndrome), and a more severe form, causing
                    extensive peeling of the skin (more than 30% of the body
                    surface - toxic epidermal necrolysis)
                  </li>
                  <li>
                    widespread red skin rash with small pus-containing blisters
                    (bullous exfoliative dermatitis)
                  </li>
                  <li>
                    a red, scaly rash with bumps under the skin and blisters
                    (exanthemous pustulosis).
                  </li>
                </ul>
              </ul>
              <div>
                <div>
                  Contact a doctor immediately if you get any of these symptoms.
                </div>

                <ul>
                  <li>inflammation of the liver (hepatitis)</li>
                  <li>
                    jaundice, caused by increases in the blood of bilirubin (a
                    substance produced in the liver) which may make your skin
                    and whites of the eyes appear yellow
                  </li>
                  <li>inflammation of tubes in the kidney</li>
                  <li>blood takes longer to clot</li>
                  <li>hyperactivity</li>
                  <li>
                    convulsions (in people taking high doses of Augmentin or who
                    have kidney problems)
                  </li>
                  <li>black tongue which looks hairy</li>
                  <li>
                    Stains on teeth (in children), generally removed by
                    brushing.
                  </li>
                </ul>
                <div>
                  Side effects that may show up in your blood or urine tests:
                </div>
                <ul>
                  <li>severe reduction in the number of white blood cells</li>
                  <li>low number of red blood cells (haemolytic anaemia)</li>
                  <li>crystals in urine.</li>
                </ul>
              </div>
              <div className="text-brand-red font-bold">
                → If you get any side effects, talk to your doctor or
                pharmacist. This includes any possible side effects not listed
                in this leaflet
              </div>
            </CustomAccordion>
            <CustomAccordion value="item-6" title="6. OTHER INFORMATION">
              <div>
                <p>
                  Parallel distributed by: Lexon Pharmaceuticals (Ireland)
                  Limited, Block 3, Harcourt Centre, Harcourt Road, Dublin 2,
                  Ireland.
                </p>
                <p>
                  Repackaged by: Lexon Pharmaceuticals (Ireland) Limited, Units
                  22 & 25, Block 4, Port Tunnel Business Park, Clonshaugh,
                  Dublin 17, Ireland.
                </p>
              </div>
              <div>
                <p>
                  Manufactured by: Glaxo Wellcome Production, Mayenne, Cedex,
                  France. Augmentin is a registered trademark of GlaxoSmithKline
                  group of companies
                </p>
              </div>
              <div>
                <p>
                  This medicinal product is authorised in the Member States of
                  the EEA under the following names:
                </p>
                <p>
                  Austria - Augmentin Belgium - Augmentin Bulgaria - Augmentin
                  Cyprus - Augmentin Czech Republic - Augmentin Estonia -
                  Augmentin Finland - Augmentin Germany - Augmentan Greece -
                  Augmentin Hungary - Augmentin Duo Iceland - Augmentin Ireland
                  - Augmentin Italy - Augmentin Latvia - Augmentin Lithuania -
                  Augmentin Luxembourg - Augmentin Malta - Augmentin Netherlands
                  - Augmentin Poland - Augmentin Portugal - Augmentin Duo
                  Romania - Augmentin Slovak Republic - Augmentin Slovenia
                  -Augmentin Spain - Augmentine, Clavumox United Kingdom -
                  Augmentin
                </p>
              </div>
            </CustomAccordion>
          </Accordion>
        </main>
      </div>
    </>
  );
}
