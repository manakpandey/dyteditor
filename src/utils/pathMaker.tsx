export default function pathMaker(code: string): string {
  return `${window.location.host}${window.location.pathname}#${code}`;
}
