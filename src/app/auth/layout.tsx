import style from "./authlayout.module.css";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section className={style.main}>{children}</section>;
}
