/* esm.sh - esbuild bundle(caniuse-lite@1.0.30001373/data/features/css-element-function) es2022 production */
var l = Object.create;
var A = Object.defineProperty;
var r = Object.getOwnPropertyDescriptor;
var u = Object.getOwnPropertyNames;
var s = Object.getPrototypeOf, S = Object.prototype.hasOwnProperty;
var c = (C, B) => () => (B || C((B = { exports: {} }).exports, B), B.exports);
var i = (C, B, e, o) => {
  if (B && typeof B == "object" || typeof B == "function") {
    for (let t of u(B)) {
      !S.call(C, t) && t !== e && A(C, t, {
        get: () => B[t],
        enumerable: !(o = r(B, t)) || o.enumerable,
      });
    }
  }
  return C;
};
var m = (
  C,
  B,
  e,
) => (e = C != null ? l(s(C)) : {},
  i(
    B || !C || !C.__esModule
      ? A(e, "default", { value: C, enumerable: !0 })
      : e,
    C,
  ));
var f = c((E, d) => {
  d.exports = {
    A: {
      A: { 2: "J D E F A B zB" },
      B: { 2: "C K L G M N O P Q R S T U V W X Y Z c d e f g h i j k l a m H" },
      C: {
        33:
          "0 1 2 3 4 5 6 7 8 9 I n J D E F A B C K L G M N O o p q r s t u v w x y z AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB QB RB nB SB oB TB UB b VB WB XB YB ZB aB bB cB dB eB fB gB hB iB P Q R pB S T U V W X Y Z c d e f g h i j k l a m H qB rB",
        164: "0B mB 1B 2B",
      },
      D: {
        2: "0 1 2 3 4 5 6 7 8 9 I n J D E F A B C K L G M N O o p q r s t u v w x y z AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB QB RB nB SB oB TB UB b VB WB XB YB ZB aB bB cB dB eB fB gB hB iB P Q R S T U V W X Y Z c d e f g h i j k l a m H qB rB 3B",
      },
      E: {
        2: "I n J D E F A B C K L G 4B sB 5B 6B 7B 8B tB jB kB 9B AC BC uB vB wB CC lB DC",
      },
      F: {
        2: "0 1 2 3 4 5 6 7 8 9 F B C G M N O o p q r s t u v w x y z AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB b VB WB XB YB ZB aB bB cB dB eB fB gB hB iB P Q R pB S T U V W X Y Z EC FC GC HC jB xB IC kB",
      },
      G: {
        2: "E sB JC yB KC LC MC NC OC PC QC RC SC TC UC VC WC XC YC ZC aC bC cC uB vB wB lB",
      },
      H: { 2: "dC" },
      I: { 2: "mB I H eC fC gC hC yB iC jC" },
      J: { 2: "D A" },
      K: { 2: "A B C b jB xB kB" },
      L: { 2: "H" },
      M: { 33: "a" },
      N: { 2: "A B" },
      O: { 2: "kC" },
      P: { 2: "I lC mC nC oC pC tB qC rC sC tC uC lB vC" },
      Q: { 2: "wC" },
      R: { 2: "xC" },
      S: { 33: "yC" },
    },
    B: 5,
    C: "CSS element() function",
  };
});
var a = m(f()),
  { A: F, B: G, C: H } = a,
  { default: n, ...p } = a,
  I = n !== void 0 ? n : p;
export { F as A, G as B, H as C, I as default };
