import React from 'react'
import img1 from "../../images/image1.jpg";
import { useState } from 'react';
import { Skeleton } from '@mui/material';

function ImageLazyLoading() {

  const [images1, Image1] = useState(img1)

  return (
    <div>
      <h3 className='text-center'>Image Lazy loading</h3>

      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor, ea, cupiditate perferendis, modi sint mollitia vel soluta totam magni accusamus dolore corporis error quaerat. Tempore, eveniet. Hic quisquam ducimus illo?
        Vel et quos inventore alias nulla accusantium officiis exercitationem placeat consectetur numquam illo est commodi, molestias totam impedit tempore minus voluptatibus natus tenetur velit cum pariatur quia. Qui, tenetur ratione.
        Dolorum veniam minima, reprehenderit excepturi non recusandae numquam voluptates ea exercitationem quia quas dolorem. Optio laudantium obcaecati doloremque exercitationem similique repellat soluta, quia tempore nulla ad quam ullam, cumque hic.
        Iusto ut iure illum! Facilis minima quia suscipit ratione facere, aperiam expedita. Accusantium, eaque mollitia necessitatibus nisi commodi inventore laudantium itaque soluta repellendus, explicabo odit expedita molestiae ex? Fuga, inventore!
        Quas culpa non quos blanditiis suscipit magni quasi deleniti sint, aperiam voluptatibus cumque voluptatem maxime incidunt, quam quaerat perspiciatis voluptates illum similique accusantium, consectetur nulla eveniet? Maiores rerum natus non?
        Sequi aperiam, ipsum molestias ex pariatur odio corporis perferendis delectus nulla quo soluta. Quidem necessitatibus enim dolorem aperiam aliquam? Corrupti quam quaerat animi harum repudiandae dolore a corporis exercitationem accusamus?
        Doloribus voluptates earum eveniet excepturi exercitationem tempore esse fugiat explicabo illum ad aliquam sit fuga aperiam facere suscipit, sapiente alias nisi. Sed ducimus sunt quidem molestiae dolorum possimus doloribus a.
        Cumque voluptatum deleniti culpa impedit nemo sint a omnis cum repellendus expedita voluptate fugiat mollitia neque hic, sit doloribus ducimus sapiente consequatur facilis quaerat. Explicabo aperiam quae enim optio placeat.
        Ex itaque voluptatem cum impedit beatae accusamus quo quisquam porro, magni possimus rerum, dolorum temporibus iste distinctio eius hic qui quia dicta! Molestiae dignissimos, sequi at sit laudantium porro provident.
        Suscipit debitis voluptatem libero dicta praesentium sequi. Molestiae fugiat natus incidunt dolorum officiis et iusto voluptas, libero, assumenda, consectetur autem. Dolorum nulla voluptates illum placeat perspiciatis possimus vel, iste odio.
        Aliquam id vitae quas ullam deleniti officiis saepe perspiciatis voluptates dicta quis? Officiis, error minus voluptatem modi vel sit veritatis ea, in reprehenderit necessitatibus, rerum possimus dolore. Quas, veniam nam?
        Omnis iure quas qui nesciunt nam? Consequatur ducimus cum totam culpa porro laborum tempore corporis id alias maxime natus sapiente rerum perspiciatis nobis repellendus, laboriosam nemo mollitia. Veritatis, reiciendis iste!
        Sit aliquid fuga unde earum doloribus! Cum quia velit suscipit, aut ad asperiores a iste architecto voluptates necessitatibus quasi dolorum, tempore modi officia iusto dolor, quae ratione illo expedita nesciunt!
        Similique excepturi cupiditate dicta. Eligendi vel dolore reprehenderit velit veritatis, excepturi accusamus nobis rerum. Obcaecati dolor amet cum, harum at, voluptatem iste quisquam ipsum repudiandae, nisi maxime eaque dolore aspernatur!
        Provident facilis distinctio facere aperiam, dignissimos, qui accusamus repudiandae earum repellendus ullam eligendi ut consequatur tempora voluptas ducimus suscipit velit sequi officiis placeat? Omnis minima, labore voluptatibus iste beatae soluta.
        Voluptates distinctio quae veritatis reprehenderit voluptatum molestiae temporibus facere iusto laudantium. Velit ipsa expedita blanditiis dicta. Autem repudiandae voluptatem voluptatibus, ullam reprehenderit commodi. Aspernatur magni minus deleniti est nemo ipsa?
        Ad officia odit est magnam perspiciatis, ipsa dolores reiciendis ipsam? Illum veritatis exercitationem neque sequi distinctio nihil aspernatur eos sunt fugit accusantium quia impedit, eligendi minus totam esse deleniti officia!
        Voluptatum ullam ipsam earum labore omnis vero voluptates expedita velit facere nam aperiam maxime nesciunt vitae sequi eius ut, delectus praesentium molestiae non dolores libero maiores sed quam! Dolorum, ullam.
        Alias ratione modi asperiores fuga. Nihil fugit sed cum dolore libero qui, modi omnis inventore iure quas harum iste consequatur fugiat sunt nostrum esse aperiam hic provident porro. Tempora, consequatur!
        Exercitationem ipsum delectus iste reprehenderit, architecto voluptatum iusto cum, magnam laboriosam, consequatur vero perferendis minima hic! Debitis atque dolore in ex consequatur, hic omnis dolores perspiciatis? Minus, laudantium? Veritatis, ipsam?
        Dicta placeat expedita eligendi reprehenderit laborum omnis laboriosam consectetur officiis vero accusamus doloribus sit assumenda, exercitationem neque, magni perspiciatis cupiditate sed accusantium ad ratione natus in, hic odit ut! Expedita.
        Molestias tempore blanditiis corrupti quo quidem pariatur reiciendis? Nobis, maiores nihil similique officia qui optio quis quam, at vitae impedit dolore eligendi? Qui soluta non esse expedita, velit facere rerum.
        At, rem eius! Nihil repellat dolorum eveniet. Aliquam porro cumque corporis eum, enim et libero error est qui amet eaque minus cupiditate a animi hic eligendi eius expedita. Explicabo, voluptas.
        Quas accusamus unde rerum ex suscipit perferendis natus minus doloribus, eveniet porro facilis error? Atque vero fuga commodi consectetur praesentium quam pariatur voluptatibus quos ipsam! Amet, id voluptatem. Laborum, commodi?
        Sunt nam aperiam cumque, placeat hic dolorum impedit reprehenderit, beatae, modi labore ducimus nesciunt sequi architecto rem temporibus. Mollitia illum id dolores consectetur. Delectus magnam voluptatum accusantium beatae maxime quas!
        Magnam voluptatibus, porro sed libero numquam impedit saepe! Perspiciatis doloremque iusto eos consectetur nobis voluptate voluptatibus ducimus officiis in quidem. Mollitia delectus beatae quo itaque eaque a cum alias expedita?
        Fuga nesciunt unde iure, et optio, sint iusto reiciendis architecto error voluptatem possimus quaerat ratione perspiciatis pariatur deleniti quas cupiditate amet, hic consequatur dolorum. Dolorem inventore nostrum eaque consequatur minima?
        Voluptate harum et dolores autem, optio earum architecto odio! Labore nihil debitis minima aut? Provident obcaecati eos, minus voluptatibus dolorum vero deleniti assumenda reprehenderit laboriosam, qui tempore accusantium, asperiores fugiat!
        Praesentium dolore ipsa nostrum quisquam et! Dolore consequuntur reprehenderit dolor soluta earum voluptate aliquam esse sit, laboriosam ea, voluptas id libero ut quas quaerat. Officiis animi vitae aperiam architecto placeat.
        Assumenda adipisci repudiandae ab id eius, neque vitae impedit odio dolorem nostrum? Vel reiciendis facere facilis illum aperiam labore laborum tenetur sunt molestiae perspiciatis eos repellat vitae, dolore explicabo ex.
        Dolore reprehenderit ullam quia autem optio sed numquam quo rerum ea consequatur odit itaque, beatae quaerat eum accusantium nam maiores deleniti, mollitia totam? Harum ab ullam distinctio quod. Nam, corporis!
        Iusto expedita magni earum repellendus ad suscipit tenetur cupiditate esse harum. Quia suscipit commodi maiores qui ut pariatur doloremque tempora voluptates? Deserunt adipisci quibusdam inventore delectus tenetur animi. Quisquam, laborum!
        Quod ab debitis, doloremque perferendis ea fugiat rerum cumque. Cupiditate vero blanditiis aut corrupti voluptates quo consectetur ratione, minus nemo laborum architecto obcaecati nisi numquam esse ut et laudantium odit.
        Autem, itaque corrupti! Nemo facilis dolore reiciendis est tenetur perspiciatis tempora illum animi expedita! Temporibus dolorem dolorum unde quae adipisci saepe pariatur ea, cum quaerat excepturi dignissimos et aliquid similique.
        Consequuntur repudiandae, rem cumque rerum suscipit impedit nisi accusantium? Ducimus, sed quo iusto fuga vero praesentium incidunt non repellat officia debitis, suscipit dolore delectus veniam repudiandae tempora et, temporibus aperiam.
        Eaque non voluptatibus aliquam reprehenderit, obcaecati omnis maiores minus quidem quo? Quisquam aperiam, suscipit molestias porro illo minus ullam, animi, aspernatur perspiciatis fuga est. Esse eveniet ducimus magnam possimus rerum?
        Quo esse voluptatem ad repellat ipsum tempora quod at? Neque dolores amet eligendi molestiae deserunt odit vitae quasi aliquam minus expedita quaerat cumque beatae quas cum, placeat, dolorum sunt! Facere.
        Animi ipsum necessitatibus illum corporis modi asperiores sit, reiciendis cupiditate ut ducimus veritatis quas esse perferendis nobis adipisci provident similique. Tempore, obcaecati repellendus. Numquam esse iusto quo! Sit, blanditiis aut.
        Atque, amet, nesciunt molestiae ea error eum doloremque, ipsum quaerat rerum quae similique. Laborum, quasi. Architecto tenetur reprehenderit aliquam commodi ipsum, itaque amet laborum ducimus distinctio magnam vitae. Nulla, tenetur.
        Sed voluptate voluptatem dolore libero quas aliquam non soluta eius officiis voluptatum facilis, sint minima quae suscipit ea dignissimos officia ipsam molestias amet nihil incidunt quidem vitae explicabo. Ad, accusantium.
        Facere esse consequatur perspiciatis ipsam eos consequuntur, officia, tempore animi totam labore hic recusandae accusamus dolor! Excepturi rerum nulla laudantium est obcaecati ex voluptatibus, unde sint quod doloremque ipsam perferendis?
        Pariatur aspernatur, inventore necessitatibus minus at laborum accusantium voluptate sed id error blanditiis, facilis sapiente numquam quibusdam tenetur sit? Alias atque tenetur sapiente beatae fuga fugit provident sed suscipit deserunt?
        Aliquid, nisi repudiandae id deleniti fugit ad modi beatae dolorem eligendi cum a ratione facere eius culpa debitis corrupti delectus minima adipisci voluptatibus? Necessitatibus fugit minima aspernatur molestias inventore modi?
        Pariatur optio facilis animi est quis quasi magni maxime deleniti architecto. Eveniet, dolor. Quas fugiat animi impedit voluptas a maiores eveniet eos itaque autem, dignissimos excepturi voluptatibus provident, sunt illo.
        Accusamus et illum praesentium animi architecto repellat neque dolorum? Ipsam, impedit cumque? Facilis excepturi aspernatur voluptatum non illum, sed odio, est ratione, deserunt perspiciatis debitis quod quibusdam tempora officiis voluptatem!
        Facere iure eum nobis veritatis maxime molestiae sed a laudantium, nemo unde, minima at! Minima assumenda magni deleniti quidem laborum doloremque obcaecati quod reprehenderit quisquam, qui molestiae porro nulla dicta!
        Labore, distinctio. Culpa veniam sapiente dolorem, reprehenderit nisi laboriosam quo explicabo corrupti atque dolore nesciunt eius! Repudiandae eos fuga placeat delectus necessitatibus, vitae minima reprehenderit nisi fugit libero sunt totam.
        Ipsam vitae maiores odio molestiae nobis, in repellendus cum animi excepturi doloremque omnis asperiores illum sequi sed numquam. Harum error nihil accusamus ex, velit esse. Vitae nisi vel nostrum facilis.
        Exercitationem suscipit error fugiat corporis nostrum aspernatur pariatur cupiditate sint reiciendis expedita at non quidem natus, facere possimus ad perferendis! Quisquam obcaecati consectetur ea amet numquam quod iure est eius?
      </p>

      <div className='d-flex justify-content-center'>
      
        <img src="https://media.istockphoto.com/id/1845563955/photo/colorful-twisted-ropes-paracords.webp?b=1&s=170667a&w=0&k=20&c=MdV1dgYhK2wdcuZpGPXl9t8RpRU30TqYFNSD6oePv5g="
          alt="Nature_Image"
          width={200}
          height={200} loading='lazy' />
      </div>

      <br /> <br />

      <div className='d-flex justify-content-center' >
        {
          images1 ?
            <img src={images1} alt="Images" loading='lazy' width={300} height={300} />

            : <Skeleton variant="rectangular" width={300} height={300} />
        }

      </div>
    </div>
  )
}

export default ImageLazyLoading;