/* esm.sh - esbuild bundle(caniuse-lite@1.0.30001399/data/features/object-fit) es2022 production */
var n = Object.create;
var A = Object.defineProperty;
var r = Object.getOwnPropertyDescriptor;
var s = Object.getOwnPropertyNames;
var c = Object.getPrototypeOf, l = Object.prototype.hasOwnProperty;
var p = (C, B) => () => (B || C((B = { exports: {} }).exports, B), B.exports);
var u = (C, B, t, o) => {
  if (B && typeof B == "object" || typeof B == "function") {
    for (let e of s(B)) {
      !l.call(C, e) && e !== t && A(C, e, {
        get: () => B[e],
        enumerable: !(o = r(B, e)) || o.enumerable,
      });
    }
  }
  return C;
};
var S = (
  C,
  B,
  t,
) => (t = C != null ? n(c(C)) : {},
  u(
    B || !C || !C.__esModule
      ? A(t, "default", { value: C, enumerable: !0 })
      : t,
    C,
  ));
var f = p((D, d) => {
  d.exports = {
    A: {
      A: { 2: "J D E F A B 1B" },
      B: {
        1: "P Q R S T U V W X Y Z c d e f g h i j k l m n o a H",
        2: "C K L G",
        260: "M N O",
      },
      C: {
        1: "7 8 9 AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB pB UB qB VB WB b XB YB ZB aB bB cB dB eB fB gB hB iB jB kB P Q R rB S T U V W X Y Z c d e f g h i j k l m n o a H sB",
        2: "0 1 2 3 4 5 6 2B oB I p J D E F A B C K L G M N O q r s t u v w x y z 3B 4B",
      },
      D: {
        1: "3 4 5 6 7 8 9 AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB pB UB qB VB WB b XB YB ZB aB bB cB dB eB fB gB hB iB jB kB P Q R S T U V W X Y Z c d e f g h i j k l m n o a H sB 5B 6B",
        2: "0 1 2 I p J D E F A B C K L G M N O q r s t u v w x y z",
      },
      E: {
        1: "A B C K L G uB lB mB CC DC EC vB wB xB yB nB FC",
        2: "I p J D 7B tB 8B 9B",
        132: "E F AC BC",
      },
      F: {
        1: "0 1 2 3 4 5 6 7 8 9 q r s t u v w x y z AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB b XB YB ZB aB bB cB dB eB fB gB hB iB jB kB P Q R rB S T U V W X Y Z",
        2: "F G M N O GC HC IC",
        33: "B C JC lB zB KC mB",
      },
      G: {
        1: "SC TC UC VC WC XC YC ZC aC bC cC dC eC vB wB xB yB nB",
        2: "tB LC 0B MC NC OC",
        132: "E PC QC RC",
      },
      H: { 33: "fC" },
      I: { 1: "H lC", 2: "oB I gC hC iC jC 0B kC" },
      J: { 2: "D A" },
      K: { 1: "b", 2: "A", 33: "B C lB zB mB" },
      L: { 1: "H" },
      M: { 1: "a" },
      N: { 2: "A B" },
      O: { 1: "mC" },
      P: { 1: "I nC oC pC qC rC uB sC tC uC vC wC nB xC yC" },
      Q: { 1: "zC" },
      R: { 1: "0C" },
      S: { 1: "1C" },
    },
    B: 4,
    C: "CSS3 object-fit/object-position",
  };
});
var i = S(f()),
  { A: E, B: F, C: G } = i,
  { default: a, ...b } = i,
  H = a !== void 0 ? a : b;
export { E as A, F as B, G as C, H as default };
