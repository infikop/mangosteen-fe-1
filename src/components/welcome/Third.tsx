import s from "./WelcomeLayout.module.scss";
import chart from "../../assets/icons/chart.svg";
import { RouterLink } from "vue-router";
import { WelcomeLayout } from "./WelcomeLayout";
export const Third = () => (
  <WelcomeLayout>
    {{
      icon: () => <img src={chart} />,
      title: () => (
        <>
          <h2>
            数据可视化
            <br />
            收支一目了然
          </h2>
        </>
      ),
      buttons: () => (
        <>
          <RouterLink class={s.fake} to="/start">
            跳过
          </RouterLink>
          <RouterLink class={s.next} to="/welcome/4">
            下一页
          </RouterLink>
          <RouterLink to="/start">跳过</RouterLink>
        </>
      ),
    }}
  </WelcomeLayout>
);

Third.displayName = "Third"

{
  /* <div class={s.wrapper}>
<div class={s.card}>
  <img src={chart} />
  <h2 class= {s.slogan}>数据可视化<br />收支一目了然</h2>
</div>
<div class={s.actions}>
  <RouterLink class={s.fake} to="/start">跳过</RouterLink>
  <RouterLink class={s.next} to="/welcome/4">下一页</RouterLink>
  <RouterLink to="/start">跳过</RouterLink>
</div>
</div> */
}
