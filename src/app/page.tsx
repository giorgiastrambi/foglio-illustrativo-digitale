import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import CustomAccordion from "@/components/ui/custom-accordion";
import { accordion_content } from "./data";

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

            <div>
              <select className="p-2">
                <option>Italiano</option>
                <option>English</option>
              </select>
            </div>
          </div>
        </header>

        <main className="flex h-full flex-col p-4">
          <Accordion type="multiple" className="flex flex-col gap-2">
            {/* {accordion_content.map((content, i) => (
              <CustomAccordion
                key={i}
                value={`item-${i}`}
                title={content.title}
                content={content.content}
              />
            ))} */}
            <CustomAccordion value="item-1" title={accordion_content[0].title}>
              <div>
                Augmentin è un antibiotico che funziona uccidendo i batteri che
                causano infezioni. Contiene due diversi medicinali chiamati
                amoxicillina e acido clavulanico. L’amoxicillina appartiene ad
                un gruppo di medicinali chiamati “penicilline” la cui attività
                può a volte essere bloccata (vengono resi inattivi). L’altro
                componente attivo (acido clavulanico) impedisce che questo
                avvenga. Augmentin è utilizzato negli adulti e nei bambini per
                trattare le seguenti infezioni:
              </div>
              <ul>
                <li>Infezioni dell'orecchio e dei seni nasali</li>
                <li>Infezioni del tratto respiratorio</li>
                <li>Infezioni del tratto urinario</li>
                <li>
                  Infezioni della pelle e dei tessuti molli comprese infezioni
                  dentali
                </li>
                <li>Infezioni delle ossa e delle articolazioni</li>
              </ul>
              <div className="text-brand-red">Cosa contiene Augmentin</div>
              <div>
                Ogni compressa contiene: Principi attivi: amoxicillina triidrato
                corrispondente ad amoxicillina 875 mg; potassio clavulanato
                corrispondente ad acido clavulanico 125 mg. Eccipienti: silice
                colloidale anidra, magnesio stearato, carbossimetilamido sodico
                A, cellulosa microcristallina, ipromellosa, titanio diossido,
                macrogol 4000, macrogol 6000.
              </div>
              <div className="text-brand-red">
                Descrizione dell'aspetto di Augmentin
              </div>
              <div>
                AUGMENTIN 875 mg + 125 mg - compresse rivestite con film - sono
                biancastre, a forma di capsula con impresso AC su entrambi i
                lati e con una linea di frattura su un lato.
              </div>
            </CustomAccordion>
            <CustomAccordion value="item-2" title={accordion_content[1].title}>
              <div className="text-brand-red">Igiene comportamentale</div>
              <div>
                Gli antibiotici sono usati per il trattamento delle infezioni
                batteriche. Non sono efficaci per le infezioni virali. Alcune
                volte un'infezione causata da batteri non risponde alla terapia
                di un antibiotico. La ragione più comune per cui questo accade è
                che i batteri che causano l'infezione sono resistenti
                all'antibiotico che viene utilizzato. Questo significa che i
                batteri sopravvivono e si moltiplicano nonostante l'antibiotico.
                <br />
                I batteri diventano resistenti agli antibiotici per diverse
                ragioni. Usando gli antibiotici in maniera appropriata si può
                ridurre l'insorgenza di resistenza ai batteri. Quando il medico
                le prescrive una terapia antibiotica, questa è indicata solo per
                la malattia che ha in corso.
                <br /> Presti attenzione ai seguenti consigli, al fine di
                evitare l'emergenza della resistenza batterica che causa il
                blocco dell'attività antibiotica.
              </div>
              <ol>
                <li>
                  É molto importante che lei prenda l'antibiotico alla giusta
                  dose, nei momenti stabiliti e per il giusto numero di giorni.
                  Legga le istruzioni del foglio illustrativo e se qualcosa non
                  le è chiaro,
                </li>
                <li>
                  Non prenda antibiotici se non sono stati prescritti
                  espressamente per lei e li usi solo per l'infezione per la
                  quale sono stati prescritti.
                </li>
                <li>
                  Non usi gli antibiotici che sono stati prescritti ad altre
                  persone anche se ha un'infezione simile alla loro.
                </li>
                <li>
                  Non dia ad altri gli antibiotici che sono stati espressamente
                  prescritti per lei.
                </li>
                <li>
                  Se alla fine della cura le avanza dell'antibiotico, lo riporti
                  al farmacista in modo che venga smaltito in maniera
                  appropriata.
                </li>
              </ol>
              <div className="text-brand-red">Non prenda Augmentin</div>
              <ul>
                <li>
                  Se è allergico (ipersensibile) ad amoxicillina, acido
                  clavulanico, penicillina o ad uno qualsiasi degli eccipienti
                  di Augmentin (elencati nel paragrafo 6)
                </li>
                <li>
                  Se ha avuto una reazione allergica grave (ipersensibilità) a
                  qualsiasi altro antibiotico. Questo può includere una eruzione
                  cutanea o un gonfiore del viso o del collo
                </li>
                <li>
                  Se ha avuto problemi al fegato o ittero (colorazione gialla
                  della pelle) quando ha preso un antibiotico.
                </li>
                <li>
                  Non prenda Augmentin se uno di questi casi la riguarda. Se ha
                  dubbi, parli con il medico o il farmacista prima di prendere
                  Augmentin. Faccia particolare attenzione con Augmentin.
                </li>
              </ul>
              <div className="text-brand-red">
                Parli con il medico o il farmacista prima di prendere questo
                medicianle se lei:
              </div>
              <ul>
                <li>Ha la mononucleosi infettiva</li>
                <li>È stato in trattamento per problemi al fegato o ai reni</li>
                <li>Non urina in modo regolare.</li>
              </ul>

              <div>
                Se lei non è sicuro che uno dei casi sopra descritti la
                riguarda, ne parli al medico o al farmacista prima di prendere
                Augmentin. In alcuni casi, il medico può fare un’indagine per
                valutare il tipo di batterio che ha causato la sua infezione.
                Sulla base dei risultati, le può prescrivere un dosaggio diverso
                di Augmentin o un medicinale diverso. Condizioni a cui lei deve
                prestare attenzione Augmentin può portare al peggioramento di
                alcune condizioni esistenti, o causare effetti indesiderati
                gravi. Questi possono includere reazioni allergiche convulsioni
                e infiammazioni.
              </div>
              <div>
                Questi possono includere reazioni allergiche convulsioni e
                infiammazioni. dell’intestino. Lei deve prestare attenzione ad
                alcuni sintomi durante l’assunzione di Augmentin, al fine di
                ridurre qualsiasi rischio. Vedere “Condizioni a cui lei deve
                prestare attenzione” al Paragrafo 4.
              </div>
              <div className="text-brand-red">
                Esami del sangue e delle urine
              </div>
              <div>
                Se lei sta per effettuare gli esami del sangue (come per esempio
                controlli relativi ai globuli rossi o esami di funzionalità del
                fegato) o esami delle urine (per il glucosio), informi il medico
                o l’infermiere che sta prendendo Augmentin. Questo perchè
                Augmentin può influenzare i risultati di questo tipo di esami.
              </div>
              <div className="text-brand-red">
                Assunzione con altri medicinali
              </div>
              <div>
                Informi il medico o il farmacista se lei sta usando o ha di
                recente usato qualsiasi altro medicinale, compresi quelli
                acquistabili senza prescrizione medica e prodotti erboristici.
              </div>
              <div>
                Se sta prendendo allopurinolo (usato per la gotta) con
                Augmentin, è molto probabile che lei possa avere una reazione
                allergica della pelle.
              </div>
              <div>
                Se sta prendendo probenecid (usato per la gotta), il medico può
                decidere di modificare la sua dose di Augmentin.
              </div>
              <div>
                Se assieme ad Augmentin sta assumendo medicinali (come il
                warfarin) che aiutano a impedire la formazione di coaguli nel
                sangue, allora può essere necessario effettuare esami del sangue
                aggiuntivi.
              </div>
              <div>
                Augmentin può influenzare il modo come il metotrexato (un
                medicinale usato per il trattamento di tumori o di malattie
                reumatiche) agisce.
              </div>
              <div className="text-brand-red">Gravidanza e allattamento</div>
              <div>
                Se lei è in gravidanza, se pensa di esserlo o sta allattando,
                informi il medico o il farmacista. Chieda consiglio al medico o
                al farmacista prima di prendere, qualsiasi medicinale.
              </div>
              <div className="text-brand-red">
                Guida di veicoli e utilizzo di macchinari
              </div>
              <div>
                Augmentin può avere degli effetti indesiderati ed i sintomi
                possono renderla inadatta a guidare veicoli.Non guidi veicoli o
                utilizzi macchinari a meno che non si senta meglio.
              </div>
            </CustomAccordion>
            <CustomAccordion value="item-3" title={accordion_content[2].title}>
              <div className="text-brand-red">
                Prenda sempre Augmentin seguendo esattamente le istruzioni del
                medico. Se ha dubbi consulti il medico o il farmacista.
              </div>
              <div>
                Adulti e bambini di peso pari o superiore a 40 kg 875 mg/125 mg
                compresse rivestite con film
              </div>
              <ul>
                <li> Dose usuale - 1 compressa due volte al giorno</li>
                <li> Dose più alta - 1 compressa tre volte al giorno</li>
              </ul>

              <div className="text-brand-red">
                Bambini di peso inferiore a 40 kg
              </div>
              <div>
                l bambini di 6 anni di età o meno dovrebbero preferibilmente
                essere trattati con Augmentin sospensione orale o bustine.
              </div>
              <div>
                Chieda al medico o farmacista per avere un consiglio sulla
                somministrazione di Augmentin compresse a bambini di peso
                inferiore a 40 kg.
              </div>
              <div className="text-brand-red">
                Pazienti con problemi ai reni e al fegato
              </div>

              <ul>
                <li>
                  Se lei ha problemi ai reni, la dose potrebbe essere
                  modificata. Il medico potrebbe scegliere un dosaggio diverso o
                  un diverso medicinale.
                </li>
                <li>
                  Se lei ha problemi al fegato, potrebbero esserle richiesti
                  esami del sangue più frequenti per controllare come funziona
                  il suo fegato.
                </li>
              </ul>
              <div className="text-brand-red">Come prendere Augmentin</div>

              <ul>
                <li>
                  Ingoi la compressa intera con un bicchiere d'acqua all'inizio
                  di un pasto o subito prima.
                </li>
                <li>
                  Distanzi le dosi in modo regolare durante il giorno, almeno a
                  distanza di 4 ore. Non prenda 2 dosi in 1 ora.
                </li>
                <li>
                  Non prenda Augmentin per più di 2 settimane. Se lei continua a
                  non stare bene deve tornare dal medico.
                </li>
              </ul>
              <div className="text-brand-red">
                Se prende più Augmentin di quanto deve
              </div>
              <div>
                Se lei prende troppo Augmentin, i segni possono includere
                alterazioni dello stomaco (nausea, vomito o diarrea) o
                convulsioni. Ne parli al medico non appena possibile. Porti la
                confezione del medicinale o il flacone per mostrarlo al medico.
              </div>

              <div className="text-brand-red">
                Se dimentica di prendere Augmentin
              </div>
              <div>
                Se dimentica di prendere una dose, la prenda non appena lo
                ricorda. Non deve prendere la dose successiva troppo presto, ma
                deve aspettare circa 4 ore prima di prendere la dose successiva.
              </div>

              <div className="text-brand-red">
                Se interrompe il trattamento con Augmentin
              </div>
              <div>
                Continui a prendere Augmentin fino a che il trattamento non sia
                finito, anche se si sente meglio. Lei ha bisogno di ogni dose
                per aiutarla a combattere l'infezione. Se alcuni batteri
                sopravvivono, possono causare il ritorno dell'infezione. Se ha
                qualsiasi dubbio sull'uso di questo prodotto, si rivolga al
                medico o al farmacista.
              </div>
            </CustomAccordion>
            <CustomAccordion value="item-4" title={accordion_content[3].title}>
              <div>
                Conservare a temperatura non superiore a 25°C.
                <br />
                Tenere fuori dalla portata e dalla vista dei bambini.
                <br />
                Non usi Augmentin dopo la data di scadenza riportata sulla
                confezione. La data di scadenza si riferisce all’ultimo giorno
                del mese.
                <br />I medicinali non devono essere gettati nell’acqua di
                scarico e nei rifiuti domestici. Chieda al farmacista come
                eliminare i medicinali che non usa più. Questo aiuterà a
                proteggere l’ambiente.
              </div>
            </CustomAccordion>
            <CustomAccordion value="item-5" title={accordion_content[4].title}>
              <div>
                Come tutti i medicinali, Augmentin può causare effetti
                indesiderati, sebbene non tutte le persone li manifestino.
              </div>
              <div>Condizioni a cui lei deve prestare attenzione</div>
              <div className="text-brand-red">Reazioni allergiche</div>
              <ul>
                <li>Eruzioni cutanee</li>
                <li>
                  Infiammazione dei vasi sanguigni (vasculiti) che possono
                  essere visibili come macchie rosse o violacee sulla pelle, ma
                  che possono interessare altre parti del corpo
                </li>
                <li>
                  Febbre, dolore alle articolazioni, gonfiore delle ghiandole
                  del collo, delle ascelle o dell'inguine
                </li>
                <li>
                  Gonfiore, a volte del viso o della bocca (angioedema), che
                  causa difficoltà nel respirare
                </li>
                <li>Collasso</li>
              </ul>

              <div className="text-brand-red font-bold">
                → Se lei presenta uno di questi sintomi contatti il medico
                immediatamente.
              </div>
              <br />
              <div className="text-brand-red">Smetta di prendere Augmentin</div>
              <div>Infiammazione intestinale</div>
              <div>
                Infiammazione intestinale, che causa diarrea acquosa
                generalmente con sangue e muco, dolore di stomaco e/o febbre.
              </div>
              <div className="text-brand-red font-bold">
                → Se lei presenta questi sintomi, contatti il prima possibile il
                medico per un consiglio.
              </div>
              <br />
              <div className="text-brand-red">
                Effetti indesiderati comuni possono interessare più di 1 su 10
                persone
              </div>
              <ul>
                <li>Diarrea (negli adulti).</li>
              </ul>
              <div className="text-brand-red">
                Effetti indesiderati comuni possono interessare fino a 1 su 10
                persone
              </div>
              <ul>
                <li>
                  Mughetto (candida - un'infezione da funghi della vagina, bocca
                  o pieghe della pelle)
                </li>
                <li>
                  Nausea, specialmente quando si assumono alte dosi: se ne
                  soffre, prenda Augmentin prima del cibo
                </li>
                <li>Vomito</li>
                <li>Diarrea (nei bambini).</li>
              </ul>

              <div className="text-brand-red">
                Effetti indesiderati non comuni possono interessare fino a 1 su
                100 persone
              </div>

              <ul>
                <li>Eruzioni cutanee, prurito</li>
                <li>Eruzione cutanea in rilievo, con prurito (orticaria)</li>
                <li>Cattiva digestione</li>
                <li>Capogiri</li>
                <li>Mal di testa</li>
              </ul>

              <div className="text-brand-red">
                Effetti indesiderati non comuni possono essere visibili dagli
                esami del sangue
              </div>
              <div>
                aumento di alcune proteine (enzimi) prodotte dal fegato.
              </div>
              <div className="text-brand-red">Effetti indesiderati rari</div>
              {/* 
              convert to html:
              Possono interessare fino a 1 su 1,000 persone
 eruzione cutanee, che possono presentarsi come vescicole e sembrare piccoli bersagli (macchia scura centrale circondata da un’area più pallida, con un anello scuro intorno al bordo – eritema multiforme)
Se lei nota uno di questi sintomi contatti il medico urgentemente
Effetti indesiderati rari possono essere visibili dagli esami del sangue:
 basso numero delle cellule coinvolte nella coagulazione del sangue
 basso numero di globuli bianchi

               */}
              <ul>
                <li>
                  Eruzione cutanee, che possono presentarsi come vescicole e
                  sembrare piccoli bersagli (macchia scura centrale circondata
                  da un'area più pallida, con un anello scuro intorno al bordo -
                  eritema multiforme)
                </li>
              </ul>
              <div>
                Se lei nota uno di questi sintomi contatti il medico
                urgentemente Effetti indesiderati rari possono essere visibili
                dagli esami del sangue:
              </div>
              <ul>
                <li>
                  Basso numero delle cellule coinvolte nella coagulazione del
                  sangue
                </li>
                <li>Basso numero di globuli bianchi</li>
              </ul>

              <div className="text-brand-red">Altri effetti indesiderati</div>
              <p>
                Altri effetti indesiderati si presentano in un numero molto
                limitato di persone, ma la loro esatta frequenza non è nota.
              </p>
              <ul>
                <li>Reazioni allergiche</li>
                <li>Infiammazione intestinale</li>
                <li>Gravi reazioni della pelle:</li>
                <ul>
                  <li>
                    una diffusa eruzione cutanea con vescicole e distacco della
                    pelle, particolarmente intorno a bocca, naso, occhi e
                    genitali (sindrome di Stevens-Johnson),e una forma più
                    grave, che causa un esteso distacco della pelle (più del 30%
                    della superficie del corpo – necrolisi epidermica tossica).
                  </li>
                  <li>
                    diffusa eruzione cutanea rossa con piccole vescicole
                    contenenti pus (dermatite bollosa esfoliativa)
                  </li>
                  <li>
                    una eruzione cutanea, rossa con croste e rigonfiamenti sotto
                    la pelle e vescicole (esantema pustoloso).
                  </li>
                </ul>
              </ul>
              <div>
                <div>
                  Se lei presenta uno di questi sintomi contatti il medico
                  immediatamente.
                </div>

                <ul>
                  <li>Infiammazione del fegato (epatite)</li>
                  <li>
                    Ittero, causato dall’aumento nel sangue di bilirubina (una
                    sostanza prodotta nel fegato) che può far apparire di colore
                    giallo la pelle e il bianco degli occhi
                  </li>
                  <li>Infiammazione dei tubuli dei reni</li>
                  <li>Il sangue impiega più tempo a coagulare</li>
                  <li>Iperattività</li>
                  <li>
                    Convulsioni (nelle persone che assumono alte dosi di
                    Augmentin o che hanno problemi ai reni)
                  </li>
                  <li>Lingua nera che appare coperta di peli</li>
                  <li>
                    Macchie sui denti (nei bambini), generalmente rimosse dallo
                    spazzolamento.
                  </li>
                </ul>
                <div>
                  Effetti indesiderati che possono essere visibili dagli esami
                  del sangue o delle urine:
                </div>
                <ul>
                  <li>Grave riduzione del numero dei globuli bianchi</li>
                  <li>Basso numero di globuli rossi (anemia emolitica)</li>
                  <li>Cristalli nelle urine.</li>
                </ul>
                <div className="text-brand-red">
                  Se lei presenta effetti indesiderati
                </div>
                <div>
                  Se uno qualsiasi degli effetti indesiderati peggiora qualsiasi
                  effetto indesiderato non elencato in questo foglio
                  illustrativo, informi il medico o il farmacista.
                </div>
              </div>
              <div className="text-brand-red font-bold">
                → Se lei presenta uno di questi sintomi contatti il medico
                immediatamente.
              </div>
            </CustomAccordion>
            <CustomAccordion value="item-6" title={accordion_content[5].title}>
              <div>
                <p>
                  Titolare A.I.C in Spagna:GlaxoSmithKline S.A. - PTM-C/Severo
                  Ochao, 2, 28760 Tres Cantos (Madrid)
                </p>
                <p>
                  Importato da: Medifarm s.r.l - Via Tiburtina 1166 - 00156 Roma
                </p>
                <p>
                  Rietichettato da: Mediwin Ltd, 13 Martello Enterprise Centre,
                  Courtwick Lane, Littlehampton, BN17 7PA, Regno Unito
                </p>
              </div>
              <div>
                <p>PRODUTTORE</p>
                <p>
                  SmithKline Beecham Pharmaceuticals - Officina di produzione:
                  Worthing (UK)
                </p>
                <p>
                  o Glaxo Wellcome Production - Officina di produzione: Mayenne
                  (Francia)
                </p>
              </div>
              <div>
                <p>
                  Questo medicinale è autorizzato negli Stati Membri dello
                  Spazio Economico Europeo con le seguenti denominazioni:
                </p>
                <p>875 mg/125 mg compresse rivestite con film</p>
                <p>
                  Austria – Augmentin, Clavamox / Belgio - Augmentin / Bulgaria
                  - Augmentin / Cipro – Augmentin, Noprilam DT /Repubblica Ceca
                  - Augmentin / Danimarca – Spektraforte / Estonia - Augmentin /
                  Finlandia – Augmentin, Clavurion / Germania – Augmentan /
                  Grecia – Augmentin / Ungheria – Augmentin Duo / Islanda –
                  Augmentin / Irlanda – Augmentin / Italia – Augmentin,
                  Neoduplamox, Clavulin/ Lettonia – Augmentin / Lituania –
                  Augmentin /Lussemburgo – Augmentin / Malta – Augmentin,
                  Noprilam DT / Olanda – Augmentin / Polonia – Augmentin /
                  Portogallo – Augmentin Duo, Clavamox DT, Noprilam / DT,
                  Penilan DT / Romania –Augmentin / Repubblica Slovacca –
                  Augmentin / Slovenia – Augmentin / Spagna
                </p>
              </div>
            </CustomAccordion>
          </Accordion>
        </main>
      </div>
    </>
  );
}
