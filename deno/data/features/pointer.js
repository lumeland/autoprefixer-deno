/* esm.sh - esbuild bundle(caniuse-lite@1.0.30001399/data/features/pointer) es2022 production */
var f = Object.create;
var A = Object.defineProperty;
var s = Object.getOwnPropertyDescriptor;
var l = Object.getOwnPropertyNames;
var u = Object.getPrototypeOf, i = Object.prototype.hasOwnProperty;
var m = (C, B) => () => (B || C((B = { exports: {} }).exports, B), B.exports);
var p = (C, B, e, o) => {
  if (B && typeof B == "object" || typeof B == "function") {
    for (let t of l(B)) {
      !i.call(C, t) && t !== e && A(C, t, {
        get: () => B[t],
        enumerable: !(o = s(B, t)) || o.enumerable,
      });
    }
  }
  return C;
};
var D = (
  C,
  B,
  e,
) => (e = C != null ? f(u(C)) : {},
  p(
    B || !C || !C.__esModule
      ? A(e, "default", { value: C, enumerable: !0 })
      : e,
    C,
  ));
var n = m((G, d) => {
  d.exports = {
    A: {
      A: { 1: "B", 2: "J D E F 1B", 164: "A" },
      B: {
        1: "C K L G M N O P Q R S T U V W X Y Z c d e f g h i j k l m n o a H",
      },
      C: {
        1: "pB UB qB VB WB b XB YB ZB aB bB cB dB eB fB gB hB iB jB kB P Q R rB S T U V W X Y Z c d e f g h i j k l m n o a H sB",
        2: "2B oB I p 3B 4B",
        8: "0 1 2 3 4 5 6 7 8 9 J D E F A B C K L G M N O q r s t u v w x y z AB BB",
        328: "CB DB EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB",
      },
      D: {
        1: "QB RB SB TB pB UB qB VB WB b XB YB ZB aB bB cB dB eB fB gB hB iB jB kB P Q R S T U V W X Y Z c d e f g h i j k l m n o a H sB 5B 6B",
        2: "I p J D E F A B C K L G M N O q r s",
        8: "0 1 2 3 4 5 6 7 8 9 t u v w x y z AB BB CB DB EB FB GB HB IB JB KB LB MB",
        584: "NB OB PB",
      },
      E: {
        1: "K L G CC DC EC vB wB xB yB nB FC",
        2: "I p J 7B tB 8B",
        8: "D E F A B C 9B AC BC uB lB",
        1096: "mB",
      },
      F: {
        1: "DB EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB b XB YB ZB aB bB cB dB eB fB gB hB iB jB kB P Q R rB S T U V W X Y Z",
        2: "F B C GC HC IC JC lB zB KC mB",
        8: "0 1 2 3 4 5 6 7 8 9 G M N O q r s t u v w x y z",
        584: "AB BB CB",
      },
      G: {
        1: "ZC aC bC cC dC eC vB wB xB yB nB",
        8: "E tB LC 0B MC NC OC PC QC RC SC TC UC VC WC XC",
        6148: "YC",
      },
      H: { 2: "fC" },
      I: { 1: "H", 8: "oB I gC hC iC jC 0B kC lC" },
      J: { 8: "D A" },
      K: { 1: "b", 2: "A", 8: "B C lB zB mB" },
      L: { 1: "H" },
      M: { 1: "a" },
      N: { 1: "B", 36: "A" },
      O: { 8: "mC" },
      P: { 1: "oC pC qC rC uB sC tC uC vC wC nB xC yC", 2: "nC", 8: "I" },
      Q: { 1: "zC" },
      R: { 2: "0C" },
      S: { 328: "1C" },
    },
    B: 2,
    C: "Pointer events",
  };
});
var a = D(n()),
  { A: H, B: I, C: P } = a,
  { default: r, ...E } = a,
  c = r !== void 0 ? r : E;
export { c as default, H as A, I as B, P as C };
