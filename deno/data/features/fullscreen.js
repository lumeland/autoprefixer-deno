/* esm.sh - esbuild bundle(caniuse-lite@1.0.30001399/data/features/fullscreen) es2022 production */
var f = Object.create;
var o = Object.defineProperty;
var n = Object.getOwnPropertyDescriptor;
var u = Object.getOwnPropertyNames;
var s = Object.getPrototypeOf, F = Object.prototype.hasOwnProperty;
var I = (C, B) => () => (B || C((B = { exports: {} }).exports, B), B.exports);
var c = (C, B, e, A) => {
  if (B && typeof B == "object" || typeof B == "function") {
    for (let t of u(B)) {
      !F.call(C, t) && t !== e && o(C, t, {
        get: () => B[t],
        enumerable: !(A = n(B, t)) || A.enumerable,
      });
    }
  }
  return C;
};
var m = (
  C,
  B,
  e,
) => (e = C != null ? f(s(C)) : {},
  c(
    B || !C || !C.__esModule
      ? o(e, "default", { value: C, enumerable: !0 })
      : e,
    C,
  ));
var l = I((E, d) => {
  d.exports = {
    A: {
      A: { 2: "J D E F A 1B", 548: "B" },
      B: {
        1: "P Q R S T U V W X Y Z c d e f g h i j k l m n o a H",
        516: "C K L G M N O",
      },
      C: {
        1: "b XB YB ZB aB bB cB dB eB fB gB hB iB jB kB P Q R rB S T U V W X Y Z c d e f g h i j k l m n o a H sB",
        2: "2B oB I p J D E F 3B 4B",
        676:
          "0 1 2 3 4 5 6 7 8 9 A B C K L G M N O q r s t u v w x y z AB BB CB DB EB FB GB HB",
        1700: "IB JB KB LB MB NB OB PB QB RB SB TB pB UB qB VB WB",
      },
      D: {
        1: "dB eB fB gB hB iB jB kB P Q R S T U V W X Y Z c d e f g h i j k l m n o a H sB 5B 6B",
        2: "I p J D E F A B C K L",
        676: "G M N O q",
        804:
          "0 1 2 3 4 5 6 7 8 9 r s t u v w x y z AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB pB UB qB VB WB b XB YB ZB aB bB cB",
      },
      E: {
        2: "I p 7B tB",
        548: "wB xB yB nB FC",
        676: "8B",
        804: "J D E F A B C K L G 9B AC BC uB lB mB CC DC EC vB",
      },
      F: {
        1: "b XB YB ZB aB bB cB dB eB fB gB hB iB jB kB P Q R rB S T U V W X Y Z mB",
        2: "F B C GC HC IC JC lB zB KC",
        804:
          "0 1 2 3 4 5 6 7 8 9 G M N O q r s t u v w x y z AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB",
      },
      G: {
        2: "E tB LC 0B MC NC OC PC QC RC SC TC UC VC",
        2052: "WC XC YC ZC aC bC cC dC eC vB wB xB yB nB",
      },
      H: { 2: "fC" },
      I: { 2: "oB I H gC hC iC jC 0B kC lC" },
      J: { 2: "D", 292: "A" },
      K: { 2: "A B C b lB zB mB" },
      L: { 1: "H" },
      M: { 1: "a" },
      N: { 2: "A", 548: "B" },
      O: { 804: "mC" },
      P: { 1: "uB sC tC uC vC wC nB xC yC", 804: "I nC oC pC qC rC" },
      Q: { 804: "zC" },
      R: { 804: "0C" },
      S: { 1: "1C" },
    },
    B: 1,
    C: "Full Screen API",
  };
});
var a = m(l()),
  { A: G, B: H, C: P } = a,
  { default: r, ...p } = a,
  S = r !== void 0 ? r : p;
export { G as A, H as B, P as C, S as default };
