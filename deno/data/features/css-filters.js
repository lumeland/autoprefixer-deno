/* esm.sh - esbuild bundle(caniuse-lite@1.0.30001399/data/features/css-filters) es2022 production */
var l = Object.create;
var o = Object.defineProperty;
var s = Object.getOwnPropertyDescriptor;
var n = Object.getOwnPropertyNames;
var u = Object.getPrototypeOf, E = Object.prototype.hasOwnProperty;
var F = (C, B) => () => (B || C((B = { exports: {} }).exports, B), B.exports);
var S = (C, B, e, f) => {
  if (B && typeof B == "object" || typeof B == "function") {
    for (let t of n(B)) {
      !E.call(C, t) && t !== e && o(C, t, {
        get: () => B[t],
        enumerable: !(f = s(B, t)) || f.enumerable,
      });
    }
  }
  return C;
};
var c = (
  C,
  B,
  e,
) => (e = C != null ? l(u(C)) : {},
  S(
    B || !C || !C.__esModule
      ? o(e, "default", { value: C, enumerable: !0 })
      : e,
    C,
  ));
var d = F((p, A) => {
  A.exports = {
    A: {
      A: { 2: "J D E F A B 1B" },
      B: {
        1: "P Q R S T U V W X Y Z c d e f g h i j k l m n o a H",
        1028: "K L G M N O",
        1346: "C",
      },
      C: {
        1: "6 7 8 9 AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB pB UB qB VB WB b XB YB ZB aB bB cB dB eB fB gB hB iB jB kB P Q R rB S T U V W X Y Z c d e f g h i j k l m n o a H sB",
        2: "2B oB 3B",
        196: "5",
        516: "0 1 2 3 4 I p J D E F A B C K L G M N O q r s t u v w x y z 4B",
      },
      D: {
        1: "OB PB QB RB SB TB pB UB qB VB WB b XB YB ZB aB bB cB dB eB fB gB hB iB jB kB P Q R S T U V W X Y Z c d e f g h i j k l m n o a H sB 5B 6B",
        2: "I p J D E F A B C K L G M N",
        33:
          "0 1 2 3 4 5 6 7 8 9 O q r s t u v w x y z AB BB CB DB EB FB GB HB IB JB KB LB MB NB",
      },
      E: {
        1: "A B C K L G BC uB lB mB CC DC EC vB wB xB yB nB FC",
        2: "I p 7B tB 8B",
        33: "J D E F 9B AC",
      },
      F: {
        1: "BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB b XB YB ZB aB bB cB dB eB fB gB hB iB jB kB P Q R rB S T U V W X Y Z",
        2: "F B C GC HC IC JC lB zB KC mB",
        33: "0 1 2 3 4 5 6 7 8 9 G M N O q r s t u v w x y z AB",
      },
      G: {
        1: "RC SC TC UC VC WC XC YC ZC aC bC cC dC eC vB wB xB yB nB",
        2: "tB LC 0B MC",
        33: "E NC OC PC QC",
      },
      H: { 2: "fC" },
      I: { 1: "H", 2: "oB I gC hC iC jC 0B", 33: "kC lC" },
      J: { 2: "D", 33: "A" },
      K: { 1: "b", 2: "A B C lB zB mB" },
      L: { 1: "H" },
      M: { 1: "a" },
      N: { 2: "A B" },
      O: { 1: "mC" },
      P: { 1: "pC qC rC uB sC tC uC vC wC nB xC yC", 33: "I nC oC" },
      Q: { 1: "zC" },
      R: { 1: "0C" },
      S: { 1: "1C" },
    },
    B: 5,
    C: "CSS Filter Effects",
  };
});
var a = c(d()),
  { A: D, B: G, C: H } = a,
  { default: r, ...i } = a,
  I = r !== void 0 ? r : i;
export { D as A, G as B, H as C, I as default };
