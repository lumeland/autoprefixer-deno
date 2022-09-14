/* esm.sh - esbuild bundle(caniuse-lite@1.0.30001399/data/features/text-overflow) es2022 production */
var l = Object.create;
var A = Object.defineProperty;
var n = Object.getOwnPropertyDescriptor;
var s = Object.getOwnPropertyNames;
var u = Object.getPrototypeOf, S = Object.prototype.hasOwnProperty;
var m = (C, B) => () => (B || C((B = { exports: {} }).exports, B), B.exports);
var p = (C, B, e, o) => {
  if (B && typeof B == "object" || typeof B == "function") {
    for (let t of s(B)) {
      !S.call(C, t) && t !== e && A(C, t, {
        get: () => B[t],
        enumerable: !(o = n(B, t)) || o.enumerable,
      });
    }
  }
  return C;
};
var x = (
  C,
  B,
  e,
) => (e = C != null ? l(u(C)) : {},
  p(
    B || !C || !C.__esModule
      ? A(e, "default", { value: C, enumerable: !0 })
      : e,
    C,
  ));
var f = m((F, d) => {
  d.exports = {
    A: {
      A: { 1: "J D E F A B", 2: "1B" },
      B: {
        1: "C K L G M N O P Q R S T U V W X Y Z c d e f g h i j k l m n o a H",
      },
      C: {
        1: "0 1 2 3 4 5 6 7 8 9 D E F A B C K L G M N O q r s t u v w x y z AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB pB UB qB VB WB b XB YB ZB aB bB cB dB eB fB gB hB iB jB kB P Q R rB S T U V W X Y Z c d e f g h i j k l m n o a H sB",
        8: "2B oB I p J 3B 4B",
      },
      D: {
        1: "0 1 2 3 4 5 6 7 8 9 I p J D E F A B C K L G M N O q r s t u v w x y z AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB pB UB qB VB WB b XB YB ZB aB bB cB dB eB fB gB hB iB jB kB P Q R S T U V W X Y Z c d e f g h i j k l m n o a H sB 5B 6B",
      },
      E: {
        1: "I p J D E F A B C K L G 7B tB 8B 9B AC BC uB lB mB CC DC EC vB wB xB yB nB FC",
      },
      F: {
        1: "0 1 2 3 4 5 6 7 8 9 B C G M N O q r s t u v w x y z AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB b XB YB ZB aB bB cB dB eB fB gB hB iB jB kB P Q R rB S T U V W X Y Z lB zB KC mB",
        33: "F GC HC IC JC",
      },
      G: {
        1: "E tB LC 0B MC NC OC PC QC RC SC TC UC VC WC XC YC ZC aC bC cC dC eC vB wB xB yB nB",
      },
      H: { 1: "fC" },
      I: { 1: "oB I H gC hC iC jC 0B kC lC" },
      J: { 1: "D A" },
      K: { 1: "b mB", 33: "A B C lB zB" },
      L: { 1: "H" },
      M: { 1: "a" },
      N: { 1: "A B" },
      O: { 1: "mC" },
      P: { 1: "I nC oC pC qC rC uB sC tC uC vC wC nB xC yC" },
      Q: { 1: "zC" },
      R: { 1: "0C" },
      S: { 1: "1C" },
    },
    B: 4,
    C: "CSS3 Text-overflow",
  };
});
var a = x(f()),
  { A: G, B: H, C: I } = a,
  { default: r, ...D } = a,
  c = r !== void 0 ? r : D;
export { c as default, G as A, H as B, I as C };
