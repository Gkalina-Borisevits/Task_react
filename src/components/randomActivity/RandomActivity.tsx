import { FC, useEffect, useState } from "react";
import Activity from "./Activity";
import MyButton from "../myButton/MyButton";
//import cn from 'classnames'
import styles from './RandomActivity.module.css'

const RandomActivity: FC = () => {
  const initialValue: Activity = {
    accessibility: 0,
    activity: "",
    key: "",
    link: "",
    participants: 0,
    price: 0,
    type: "",
  };

  const [activity, setActivity] = useState<Activity>(initialValue);
  async function loadActivity(): Promise<void> {
    const res = await fetch("https://www.boredapi.com/api/activity");
    const data = await res.json();
    setActivity(data);
  }

  useEffect(() => {
    loadActivity();
  }, []);

  return (
    <div className={styles.text}>
      <h1>RandomActivity</h1>
      <p>Попробуй: {activity.activity}</p>
      {/* не забывайте указывать знак вопроса, если обращаетесь к объекту с бека (вдруг он undefined) */}
      {/* {activity?.link && <p>Узнать больше: <a target="_blank" href={activity.link} rel="noreferrer"> */}
      {activity?.link ?
        (<p>Узнать больше: <a target="_blank" href={activity.link} rel="noreferrer">{activity.link}</a></p>) :
        (<a target="_blank" href={`https://www.google.com/search?q=${activity.activity}`} rel="noreferrer"><p>Искать в гугле</p></a>)}
      <MyButton onClick={loadActivity} text="Новая активность!" />
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident repudiandae expedita voluptates voluptatum iure. Tempora cumque maiores accusamus sapiente explicabo placeat quia recusandae ipsam dolores labore id perspiciatis, voluptates harum.
        Debitis aliquam accusamus ipsa minus. Vero voluptatum incidunt illo? Rerum possimus quibusdam earum quaerat omnis? Quod numquam culpa exercitationem architecto. Exercitationem maiores error sit iste iusto pariatur, mollitia doloribus atque!
        Magnam exercitationem incidunt repudiandae ad voluptas tempore, doloribus quisquam eos nesciunt, fugiat quidem sed autem. Consectetur eaque excepturi nulla modi perferendis? Vel et earum recusandae! Tenetur esse repellat ipsum magnam.
        Iste quaerat magnam quibusdam amet debitis quidem ea cumque illum velit totam in laboriosam neque distinctio exercitationem, earum natus voluptas tenetur? Quo ad cum unde, aliquid quod minus iusto id?
        Dignissimos repellendus minima natus necessitatibus quia esse assumenda in error veritatis. Animi nulla obcaecati odio aperiam! Deleniti, odit enim? Iusto quaerat sunt quidem dolorem inventore dicta laboriosam delectus enim libero.
        Earum, perspiciatis a exercitationem, harum odio enim quisquam vel odit error deserunt quis cumque esse! Laborum illum quos aliquam iure libero nulla delectus inventore cumque, deleniti nam porro dolorum dolor.
        Voluptatum quibusdam doloribus repellendus ex unde totam, tempore minus dignissimos ipsa, labore, eius tenetur laudantium! Dolorem rem fuga possimus. Accusamus tempora esse beatae tempore sunt itaque doloribus nulla alias officiis.
        Molestias libero sequi iste exercitationem beatae expedita blanditiis eaque tempore. Culpa nesciunt eius, illo earum tenetur non sint provident corrupti cupiditate facilis vitae pariatur, dolorum molestiae, libero aspernatur labore. Officia.
        Magnam sunt optio reprehenderit, hic incidunt culpa saepe corrupti error quam et numquam aperiam quo, explicabo harum vel eum adipisci dolorum voluptas quia quidem suscipit earum omnis. Repudiandae, perspiciatis eveniet?
        Hic vitae tempore deleniti asperiores explicabo distinctio fuga magni, facilis voluptatibus architecto. Tempore dolores dicta accusamus delectus doloremque hic, maiores natus ratione quia possimus veritatis voluptate cumque sequi minus accusantium.
        Id, debitis nesciunt corporis quae incidunt veritatis sint repudiandae laudantium voluptate earum provident, illo odit repellat voluptatum error dolorum aut! Earum, assumenda fugiat. Perferendis dolorum culpa nesciunt voluptatum fugit possimus.
        Officia in similique porro, repudiandae quae deserunt ad tempora corrupti. Officia, sapiente cumque eaque natus recusandae molestias unde hic perspiciatis dolor obcaecati minus corrupti magnam alias ex dolorem velit atque.
        Nam reprehenderit perspiciatis modi officia numquam! Unde rem molestiae libero vero saepe illo. Quas sint, fugit eos quasi odit modi illum accusamus qui commodi corrupti temporibus ratione. Quo, nesciunt debitis!
        Quam inventore, incidunt error quis consequatur dignissimos dicta tempora deserunt eius recusandae, nostrum similique assumenda, culpa eos veritatis a fugit voluptates perspiciatis rem. Dolorum sequi nesciunt, exercitationem tenetur beatae mollitia.
        Quis libero necessitatibus fugiat consectetur adipisci velit ipsum debitis earum alias magni numquam ut ducimus, ipsam quidem soluta nostrum harum. Nobis officiis perspiciatis minus quia expedita ipsum similique, blanditiis voluptate.
        Magni dolorum voluptatem dolores similique, esse debitis eos? Sequi minus rem dicta explicabo unde similique nulla consequuntur at iste necessitatibus? Pariatur sint, eligendi alias sequi veniam eum asperiores odio qui!
        Tempora, laudantium. Incidunt pariatur tempore, at, dolor nostrum dicta, nobis illum rerum sed id fugiat reiciendis autem? Illum rerum autem quisquam, consequuntur aliquam saepe, numquam obcaecati explicabo excepturi nostrum nihil!
        Molestias iste odit aut id aliquid dignissimos provident quae aperiam ratione pariatur veniam sunt vel vero perferendis autem tempora, a, facere adipisci hic! Porro odio numquam id mollitia velit fugiat?
        Blanditiis est, tempore distinctio eum minima, vel odit temporibus ipsa alias, enim cum voluptates. Culpa doloremque hic esse earum accusamus, corporis corrupti atque nostrum aliquid animi tempore laborum? Adipisci, voluptatibus.
        Nulla, assumenda! Sapiente repellendus deleniti, modi asperiores aperiam illum, laudantium repudiandae libero aliquid deserunt corrupti nostrum quaerat aspernatur. Dolorum dolore dolorem facere alias mollitia modi quisquam nulla culpa repellendus totam?
        Adipisci laboriosam veritatis et repellendus expedita ad in natus officiis esse nulla sapiente veniam eum, eaque odio, mollitia delectus hic nihil amet velit perspiciatis deserunt porro tenetur quod. Quod, voluptas!
        Quae labore optio sint voluptates laborum quia, delectus aliquam unde laudantium quo enim! Consequuntur voluptatibus minima inventore iste soluta, nulla, eius ducimus sapiente quis similique debitis dolorum culpa id aliquid?
        Suscipit praesentium placeat sint, ad hic totam debitis aliquid, libero maxime voluptatibus perferendis dolore quod obcaecati dignissimos reprehenderit quia, omnis recusandae impedit mollitia asperiores ea non soluta aliquam! Quod, sint!
        Ullam maxime id necessitatibus beatae, alias assumenda tempore rem, iste expedita aspernatur vero architecto, qui perferendis quisquam! Voluptatum ad accusantium possimus harum, dolor facilis non, minima deleniti illo recusandae officia!
        Cum odio laudantium neque autem minus officiis maxime unde modi iste animi, maiores soluta praesentium magni? Dolores vel minima placeat. Omnis quidem nesciunt deserunt voluptatem. Explicabo quaerat impedit et veniam?
        Repellat, est! Modi, cupiditate consequatur dolores corrupti ea ullam quod iusto. Fuga mollitia inventore explicabo cupiditate autem pariatur reprehenderit facere laborum quisquam ea, blanditiis cumque architecto iste quos, quidem cum.
        Inventore eaque natus, maxime sed architecto illum quasi! Exercitationem ut molestias porro rerum temporibus, veniam optio quos neque tempora, est corporis eveniet velit perferendis deserunt. Non rerum incidunt fuga excepturi?
        Molestiae itaque quaerat illo a cupiditate quibusdam, esse debitis suscipit atque repudiandae, placeat repellendus reiciendis maiores iste velit, libero accusamus maxime possimus obcaecati fuga ex. Quis sapiente cum velit magni.
        Est mollitia esse maxime maiores corrupti voluptates alias quod perferendis pariatur possimus dolorum saepe dolores, aliquam corporis repellat quibusdam voluptas ea dolorem nostrum ab molestias sequi? Ad iste dolore veniam?
        Exercitationem, voluptatem? Illo perspiciatis minus dicta quia labore sed quae pariatur modi fuga vitae non nulla commodi harum illum debitis sequi magnam, dolores, optio alias. Animi inventore quod nihil quibusdam.
        
       
      </p>
    </div>
  );
};
export default RandomActivity;
