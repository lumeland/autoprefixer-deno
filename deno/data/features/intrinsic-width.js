/* esm.sh - esbuild bundle(caniuse-lite@1.0.30001399/data/features/intrinsic-width) es2022 production */
var s = Object.create;
var n = Object.defineProperty;
var a = Object.getOwnPropertyDescriptor;
var f = Object.getOwnPropertyNames;
var c = Object.getPrototypeOf, l = Object.prototype.hasOwnProperty;
var u = (C, B) => () => (B || C((B = { exports: {} }).exports, B), B.exports);
var E = (C, B, t, i) => {
  if (B && typeof B == "object" || typeof B == "function") {
    for (let e of f(B)) {
      !l.call(C, e) && e !== t && n(C, e, {
        get: () => B[e],
        enumerable: !(i = a(B, e)) || i.enumerable,
      });
    }
  }
  return C;
};
var I = (
  C,
  B,
  t,
) => (t = C != null ? s(c(C)) : {},
  E(
    B || !C || !C.__esModule
      ? n(t, "default", { value: C, enumerable: !0 })
      : t,
    C,
  ));
var r = u((x, o) => {
  o.exports = {
    A: {
      A: { 2: "J D E F A B 1B" },
      B: {
        2: "C K L G M N O",
        1537: "P Q R S T U V W X Y Z c d e f g h i j k l m n o a H",
      },
      C: {
        2: "2B",
        932:
          "0 1 2 3 4 5 6 7 8 9 oB I p J D E F A B C K L G M N O q r s t u v w x y z AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB pB UB qB VB WB b XB 3B 4B",
        2308:
          "YB ZB aB bB cB dB eB fB gB hB iB jB kB P Q R rB S T U V W X Y Z c d e f g h i j k l m n o a H sB",
      },
      D: {
        2: "I p J D E F A B C K L G M N O q r s",
        545: "0 1 2 3 4 5 6 7 8 9 t u v w x y z AB BB CB DB EB FB GB",
        1537:
          "HB IB JB KB LB MB NB OB PB QB RB SB TB pB UB qB VB WB b XB YB ZB aB bB cB dB eB fB gB hB iB jB kB P Q R S T U V W X Y Z c d e f g h i j k l m n o a H sB 5B 6B",
      },
      E: {
        2: "I p J 7B tB 8B",
        516: "B C K L G lB mB CC DC EC vB wB xB yB nB FC",
        548: "F A BC uB",
        676: "D E 9B AC",
      },
      F: {
        2: "F B C GC HC IC JC lB zB KC mB",
        513: "5",
        545: "0 1 2 3 G M N O q r s t u v w x y z",
        1537:
          "4 6 7 8 9 AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB b XB YB ZB aB bB cB dB eB fB gB hB iB jB kB P Q R rB S T U V W X Y Z",
      },
      G: {
        2: "tB LC 0B MC NC",
        516: "cC dC eC vB wB xB yB nB",
        548: "QC RC SC TC UC VC WC XC YC ZC aC bC",
        676: "E OC PC",
      },
      H: { 2: "fC" },
      I: { 2: "oB I gC hC iC jC 0B", 545: "kC lC", 1537: "H" },
      J: { 2: "D", 545: "A" },
      K: { 2: "A B C lB zB mB", 1537: "b" },
      L: { 1537: "H" },
      M: { 2308: "a" },
      N: { 2: "A B" },
      O: { 1: "mC" },
      P: { 545: "I", 1537: "nC oC pC qC rC uB sC tC uC vC wC nB xC yC" },
      Q: { 545: "zC" },
      R: { 1537: "0C" },
      S: { 932: "1C" },
    },
    B: 5,
    C: "Intrinsic & Extrinsic Sizing",
  };
});
var d = I(r()),
  { A: D, B: F, C: G } = d,
  { default: A, ...m } = d,
  H = A !== void 0 ? A : m;
export { D as A, F as B, G as C, H as default };
