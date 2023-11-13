import s from "./WelcomeLayout.module.scss";
import clock from "../../assets/icons/clock.svg";
import { RouterLink } from "vue-router";
import { WelcomeLayout } from "./WelcomeLayout";
export const Second = () => (
  <WelcomeLayout>
    {{
      icon: () => <img src={clock} />,
      title: () => (
        <>
          <h2>
            每日提醒
            <br />
            不会遗漏每一笔账单
          </h2>
        </>
      ),
      buttons: () => (
        <>
          <RouterLink class={s.fake} to="/start">
            跳过
          </RouterLink>
          <RouterLink class={s.next} to="/welcome/3">
            下一页
          </RouterLink>
          <RouterLink to="/start">跳过</RouterLink>
        </>
      ),
    }}
  </WelcomeLayout>
);

Second.displayName = "Second"

{
  /* <div class={s.wrapper}>
  <div class={s.card}>
    <img src={clock} />
    <h2 class={s.slogan}>
      每日提醒
      <br />
      不会遗漏每一笔账单
    </h2>
  </div>
  <div class={s.actions}>
    <RouterLink class={s.fake} to="/start">
      跳过
    </RouterLink>
    <RouterLink class={s.next} to="/welcome/3">
      下一页
    </RouterLink>
    <RouterLink to="/start">跳过</RouterLink>
  </div>
</div>; */
}
