import Notifications from "@components/layout/Notifications/Notifications";
import FilterBar from "@components/layout/FilterBar/FilterBar";
import Header from "@components/layout/Header/Header";
import Nav from "@components/layout/Nav/Nav";

export default function MainPage() {
  return (
    <div>
      <Header />
      <Nav />
      <FilterBar />
      <Notifications />
    </div>
  )
}
