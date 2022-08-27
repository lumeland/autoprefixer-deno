/* esm.sh - esbuild bundle(caniuse-lite@1.0.30001373/data/features/css-logical-props) es2022 production */
var l = Object.create;
var r = Object.defineProperty;
var s = Object.getOwnPropertyDescriptor;
var i = Object.getOwnPropertyNames;
var p = Object.getPrototypeOf, u = Object.prototype.hasOwnProperty;
var S = (C, B) => () => (B || C((B = { exports: {} }).exports, B), B.exports);
var c = (C, B, e, o) => {
  if (B && typeof B == "object" || typeof B == "function") {
    for (let t of i(B)) {
      !u.call(C, t) && t !== e && r(C, t, {
        get: () => B[t],
        enumerable: !(o = s(B, t)) || o.enumerable,
      });
    }
  }
  return C;
};
var n = (
  C,
  B,
  e,
) => (e = C != null ? l(p(C)) : {},
  c(
    B || !C || !C.__esModule
      ? r(e, "default", { value: C, enumerable: !0 })
      : e,
    C,
  ));
var a = S((F, A) => {
  A.exports = {
    A: {
      A: { 2: "J D E F A B zB" },
      B: {
        1: "Y Z c d e f g h i j k l a m H",
        2: "C K L G M N O",
        1028: "W X",
        1540: "P Q R S T U V",
      },
      C: {
        1: "WB XB YB ZB aB bB cB dB eB fB gB hB iB P Q R pB S T U V W X Y Z c d e f g h i j k l a m H qB rB",
        2: "0B",
        164:
          "0 1 2 3 4 5 6 7 8 9 mB I n J D E F A B C K L G M N O o p q r s t u v w x y z 1B 2B",
        1540:
          "AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB QB RB nB SB oB TB UB b VB",
      },
      D: {
        1: "Y Z c d e f g h i j k l a m H qB rB 3B",
        292:
          "0 1 2 3 4 5 6 7 8 9 I n J D E F A B C K L G M N O o p q r s t u v w x y z AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB QB RB nB SB oB TB UB b VB WB XB YB",
        1028: "W X",
        1540: "ZB aB bB cB dB eB fB gB hB iB P Q R S T U V",
      },
      E: {
        1: "G BC uB vB wB CC lB DC",
        292: "I n J D E F A B C 4B sB 5B 6B 7B 8B tB jB",
        1028: "AC",
        1540: "K L kB 9B",
      },
      F: {
        1: "gB hB iB P Q R pB S T U V W X Y Z",
        2: "F B C EC FC GC HC jB xB IC kB",
        292:
          "0 1 2 3 4 5 6 7 8 9 G M N O o p q r s t u v w x y z AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB",
        1028: "eB fB",
        1540: "PB QB RB SB TB UB b VB WB XB YB ZB aB bB cB dB",
      },
      G: {
        1: "cC uB vB wB lB",
        292: "E sB JC yB KC LC MC NC OC PC QC RC SC TC UC",
        1028: "bC",
        1540: "VC WC XC YC ZC aC",
      },
      H: { 2: "dC" },
      I: { 1: "H", 292: "mB I eC fC gC hC yB iC jC" },
      J: { 292: "D A" },
      K: { 1: "b", 2: "A B C jB xB kB" },
      L: { 1: "H" },
      M: { 1: "a" },
      N: { 2: "A B" },
      O: { 292: "kC" },
      P: { 1: "uC lB vC", 292: "I lC mC nC oC pC", 1540: "tB qC rC sC tC" },
      Q: { 1540: "wC" },
      R: { 1540: "xC" },
      S: { 1540: "yC" },
    },
    B: 5,
    C: "CSS Logical Properties",
  };
});
var f = n(a()),
  { A: G, B: H, C: I } = f,
  { default: d, ...D } = f,
  L = d !== void 0 ? d : D;
export { G as A, H as B, I as C, L as default };
