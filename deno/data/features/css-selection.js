/* esm.sh - esbuild bundle(caniuse-lite@1.0.30001373/data/features/css-selection) es2022 production */
var f = Object.create;
var d = Object.defineProperty;
var n = Object.getOwnPropertyDescriptor;
var r = Object.getOwnPropertyNames;
var u = Object.getPrototypeOf, p = Object.prototype.hasOwnProperty;
var S = (C, B) => () => (B || C((B = { exports: {} }).exports, B), B.exports);
var c = (C, B, e, o) => {
  if (B && typeof B == "object" || typeof B == "function") {
    for (let t of r(B)) {
      !p.call(C, t) && t !== e && d(C, t, {
        get: () => B[t],
        enumerable: !(o = n(B, t)) || o.enumerable,
      });
    }
  }
  return C;
};
var i = (
  C,
  B,
  e,
) => (e = C != null ? f(u(C)) : {},
  c(
    B || !C || !C.__esModule
      ? d(e, "default", { value: C, enumerable: !0 })
      : e,
    C,
  ));
var l = S((E, A) => {
  A.exports = {
    A: {
      A: { 1: "F A B", 2: "J D E zB" },
      B: { 1: "C K L G M N O P Q R S T U V W X Y Z c d e f g h i j k l a m H" },
      C: {
        1: "TB UB b VB WB XB YB ZB aB bB cB dB eB fB gB hB iB P Q R pB S T U V W X Y Z c d e f g h i j k l a m H qB rB",
        33:
          "0 1 2 3 4 5 6 7 8 9 0B mB I n J D E F A B C K L G M N O o p q r s t u v w x y z AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB QB RB nB SB oB 1B 2B",
      },
      D: {
        1: "0 1 2 3 4 5 6 7 8 9 I n J D E F A B C K L G M N O o p q r s t u v w x y z AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB QB RB nB SB oB TB UB b VB WB XB YB ZB aB bB cB dB eB fB gB hB iB P Q R S T U V W X Y Z c d e f g h i j k l a m H qB rB 3B",
      },
      E: {
        1: "I n J D E F A B C K L G 4B sB 5B 6B 7B 8B tB jB kB 9B AC BC uB vB wB CC lB DC",
      },
      F: {
        1: "0 1 2 3 4 5 6 7 8 9 B C G M N O o p q r s t u v w x y z AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB b VB WB XB YB ZB aB bB cB dB eB fB gB hB iB P Q R pB S T U V W X Y Z EC FC GC HC jB xB IC kB",
        2: "F",
      },
      G: {
        2: "E sB JC yB KC LC MC NC OC PC QC RC SC TC UC VC WC XC YC ZC aC bC cC uB vB wB lB",
      },
      H: { 2: "dC" },
      I: { 1: "H iC jC", 2: "mB I eC fC gC hC yB" },
      J: { 1: "A", 2: "D" },
      K: { 1: "C b xB kB", 16: "A B jB" },
      L: { 1: "H" },
      M: { 1: "a" },
      N: { 1: "A B" },
      O: { 1: "kC" },
      P: { 1: "I lC mC nC oC pC tB qC rC sC tC uC lB vC" },
      Q: { 1: "wC" },
      R: { 1: "xC" },
      S: { 33: "yC" },
    },
    B: 5,
    C: "::selection CSS pseudo-element",
  };
});
var a = i(l()),
  { A: F, B: G, C: H } = a,
  { default: s, ...m } = a,
  I = s !== void 0 ? s : m;
export { F as A, G as B, H as C, I as default };
