/* esm.sh - esbuild bundle(caniuse-lite@1.0.30001399/data/features/css-selection) es2022 production */
var a = Object.create;
var d = Object.defineProperty;
var f = Object.getOwnPropertyDescriptor;
var r = Object.getOwnPropertyNames;
var u = Object.getPrototypeOf, m = Object.prototype.hasOwnProperty;
var p = (C, B) => () => (B || C((B = { exports: {} }).exports, B), B.exports);
var S = (C, B, e, o) => {
  if (B && typeof B == "object" || typeof B == "function") {
    for (let t of r(B)) {
      !m.call(C, t) && t !== e && d(C, t, {
        get: () => B[t],
        enumerable: !(o = f(B, t)) || o.enumerable,
      });
    }
  }
  return C;
};
var c = (
  C,
  B,
  e,
) => (e = C != null ? a(u(C)) : {},
  S(
    B || !C || !C.__esModule
      ? d(e, "default", { value: C, enumerable: !0 })
      : e,
    C,
  ));
var l = p((E, A) => {
  A.exports = {
    A: {
      A: { 1: "F A B", 2: "J D E 1B" },
      B: {
        1: "C K L G M N O P Q R S T U V W X Y Z c d e f g h i j k l m n o a H",
      },
      C: {
        1: "VB WB b XB YB ZB aB bB cB dB eB fB gB hB iB jB kB P Q R rB S T U V W X Y Z c d e f g h i j k l m n o a H sB",
        33:
          "0 1 2 3 4 5 6 7 8 9 2B oB I p J D E F A B C K L G M N O q r s t u v w x y z AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB pB UB qB 3B 4B",
      },
      D: {
        1: "0 1 2 3 4 5 6 7 8 9 I p J D E F A B C K L G M N O q r s t u v w x y z AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB pB UB qB VB WB b XB YB ZB aB bB cB dB eB fB gB hB iB jB kB P Q R S T U V W X Y Z c d e f g h i j k l m n o a H sB 5B 6B",
      },
      E: {
        1: "I p J D E F A B C K L G 7B tB 8B 9B AC BC uB lB mB CC DC EC vB wB xB yB nB FC",
      },
      F: {
        1: "0 1 2 3 4 5 6 7 8 9 B C G M N O q r s t u v w x y z AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB b XB YB ZB aB bB cB dB eB fB gB hB iB jB kB P Q R rB S T U V W X Y Z GC HC IC JC lB zB KC mB",
        2: "F",
      },
      G: {
        2: "E tB LC 0B MC NC OC PC QC RC SC TC UC VC WC XC YC ZC aC bC cC dC eC vB wB xB yB nB",
      },
      H: { 2: "fC" },
      I: { 1: "H kC lC", 2: "oB I gC hC iC jC 0B" },
      J: { 1: "A", 2: "D" },
      K: { 1: "C b zB mB", 16: "A B lB" },
      L: { 1: "H" },
      M: { 1: "a" },
      N: { 1: "A B" },
      O: { 1: "mC" },
      P: { 1: "I nC oC pC qC rC uB sC tC uC vC wC nB xC yC" },
      Q: { 1: "zC" },
      R: { 1: "0C" },
      S: { 33: "1C" },
    },
    B: 5,
    C: "::selection CSS pseudo-element",
  };
});
var s = c(l()),
  { A: F, B: G, C: H } = s,
  { default: n, ...i } = s,
  I = n !== void 0 ? n : i;
export { F as A, G as B, H as C, I as default };
