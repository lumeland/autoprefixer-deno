/* esm.sh - esbuild bundle(caniuse-lite@1.0.30001373/data/features/aac) es2022 production */
var l = Object.create;
var A = Object.defineProperty;
var u = Object.getOwnPropertyDescriptor;
var i = Object.getOwnPropertyNames;
var s = Object.getPrototypeOf, m = Object.prototype.hasOwnProperty;
var n = (C, B) => () => (B || C((B = { exports: {} }).exports, B), B.exports);
var p = (C, B, e, o) => {
  if (B && typeof B == "object" || typeof B == "function") {
    for (let t of i(B)) {
      !m.call(C, t) && t !== e && A(C, t, {
        get: () => B[t],
        enumerable: !(o = u(B, t)) || o.enumerable,
      });
    }
  }
  return C;
};
var D = (
  C,
  B,
  e,
) => (e = C != null ? l(s(C)) : {},
  p(
    B || !C || !C.__esModule
      ? A(e, "default", { value: C, enumerable: !0 })
      : e,
    C,
  ));
var d = n((G, a) => {
  a.exports = {
    A: {
      A: { 1: "F A B", 2: "J D E zB" },
      B: { 1: "C K L G M N O P Q R S T U V W X Y Z c d e f g h i j k l a m H" },
      C: {
        2: "0B mB I n J D E F A B C K L G M N O o p q 1B 2B",
        132:
          "0 1 2 3 4 5 6 7 8 9 r s t u v w x y z AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB QB RB nB SB oB TB UB b VB WB XB YB ZB aB bB cB dB eB fB gB hB iB P Q R pB S T U V W X Y Z c d e f g h i j k l a m H qB rB",
      },
      D: {
        1: "0 1 2 3 4 5 6 7 8 9 C K L G M N O o p q r s t u v w x y z AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB QB RB nB SB oB TB UB b VB WB XB YB ZB aB bB cB dB eB fB gB hB iB P Q R S T U V W X Y Z c d e f g h i j k l a m H qB rB 3B",
        2: "I n J D E F",
        16: "A B",
      },
      E: {
        1: "I n J D E F A B C K L G 5B 6B 7B 8B tB jB kB 9B AC BC uB vB wB CC lB DC",
        2: "4B sB",
      },
      F: {
        1: "0 1 2 3 4 5 6 7 8 9 G M N O o p q r s t u v w x y z AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB b VB WB XB YB ZB aB bB cB dB eB fB gB hB iB P Q R pB S T U V W X Y Z",
        2: "F B C EC FC GC HC jB xB IC kB",
      },
      G: {
        1: "E JC yB KC LC MC NC OC PC QC RC SC TC UC VC WC XC YC ZC aC bC cC uB vB wB lB",
        16: "sB",
      },
      H: { 2: "dC" },
      I: { 1: "mB I H hC yB iC jC", 2: "eC fC gC" },
      J: { 1: "A", 2: "D" },
      K: { 1: "b", 2: "A B C jB xB kB" },
      L: { 1: "H" },
      M: { 132: "a" },
      N: { 1: "A", 2: "B" },
      O: { 1: "kC" },
      P: { 1: "I lC mC nC oC pC tB qC rC sC tC uC lB vC" },
      Q: { 1: "wC" },
      R: { 1: "xC" },
      S: { 132: "yC" },
    },
    B: 6,
    C: "AAC audio file format",
  };
});
var r = D(d()),
  { A: H, B: I, C: c } = r,
  { default: f, ...E } = r,
  x = f !== void 0 ? f : E;
export { c as C, H as A, I as B, x as default };
