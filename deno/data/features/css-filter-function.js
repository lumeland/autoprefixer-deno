/* esm.sh - esbuild bundle(caniuse-lite@1.0.30001373/data/features/css-filter-function) es2022 production */
var l = Object.create;
var f = Object.defineProperty;
var n = Object.getOwnPropertyDescriptor;
var u = Object.getOwnPropertyNames;
var i = Object.getPrototypeOf, s = Object.prototype.hasOwnProperty;
var S = (C, B) => () => (B || C((B = { exports: {} }).exports, B), B.exports);
var c = (C, B, e, o) => {
  if (B && typeof B == "object" || typeof B == "function") {
    for (let t of u(B)) {
      !s.call(C, t) && t !== e && f(C, t, {
        get: () => B[t],
        enumerable: !(o = n(B, t)) || o.enumerable,
      });
    }
  }
  return C;
};
var p = (
  C,
  B,
  e,
) => (e = C != null ? l(i(C)) : {},
  c(
    B || !C || !C.__esModule
      ? f(e, "default", { value: C, enumerable: !0 })
      : e,
    C,
  ));
var d = S((F, A) => {
  A.exports = {
    A: {
      A: { 2: "J D E F A B zB" },
      B: { 2: "C K L G M N O P Q R S T U V W X Y Z c d e f g h i j k l a m H" },
      C: {
        2: "0 1 2 3 4 5 6 7 8 9 0B mB I n J D E F A B C K L G M N O o p q r s t u v w x y z AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB QB RB nB SB oB TB UB b VB WB XB YB ZB aB bB cB dB eB fB gB hB iB P Q R pB S T U V W X Y Z c d e f g h i j k l a m H qB rB 1B 2B",
      },
      D: {
        2: "0 1 2 3 4 5 6 7 8 9 I n J D E F A B C K L G M N O o p q r s t u v w x y z AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB QB RB nB SB oB TB UB b VB WB XB YB ZB aB bB cB dB eB fB gB hB iB P Q R S T U V W X Y Z c d e f g h i j k l a m H qB rB 3B",
      },
      E: {
        1: "A B C K L G 8B tB jB kB 9B AC BC uB vB wB CC lB DC",
        2: "I n J D E 4B sB 5B 6B 7B",
        33: "F",
      },
      F: {
        2: "0 1 2 3 4 5 6 7 8 9 F B C G M N O o p q r s t u v w x y z AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB b VB WB XB YB ZB aB bB cB dB eB fB gB hB iB P Q R pB S T U V W X Y Z EC FC GC HC jB xB IC kB",
      },
      G: {
        1: "QC RC SC TC UC VC WC XC YC ZC aC bC cC uB vB wB lB",
        2: "E sB JC yB KC LC MC NC",
        33: "OC PC",
      },
      H: { 2: "dC" },
      I: { 2: "mB I H eC fC gC hC yB iC jC" },
      J: { 2: "D A" },
      K: { 2: "A B C b jB xB kB" },
      L: { 2: "H" },
      M: { 2: "a" },
      N: { 2: "A B" },
      O: { 2: "kC" },
      P: { 2: "I lC mC nC oC pC tB qC rC sC tC uC lB vC" },
      Q: { 2: "wC" },
      R: { 2: "xC" },
      S: { 2: "yC" },
    },
    B: 5,
    C: "CSS filter() function",
  };
});
var a = p(d()),
  { A: G, B: H, C: I } = a,
  { default: r, ...D } = a,
  m = r !== void 0 ? r : D;
export { G as A, H as B, I as C, m as default };
