<!-- 设置detail模块的背景色 -->
<style>
.my-details {
  border: 1px solid #03172a;
  border-radius: 5px;
  padding: 1.0em;
  margin: 1em 0;

  font-weight: bold;

  background-color:	#FFEFD5;
  margin-top: 0.5em;
}
</style>

Notes for *Statistical Physics of Spin Glasses and Information Processing: An Introduction - Nishimori - 2001*

# Chapter 3: Replica Symmetry Breaking
在此部分依然考虑SK model。上一部分中使用replica symmetry 假设，得到的结果在低温下出现了negative entropy的问题。为了解决这个问题，考虑order parameters $q_{\alpha\beta}$ 和 $m_{\alpha}$ 可能依赖于replica index 的标号，即考虑**replica symmetry breaking**的情况。虽然一开始这种方法是为了避免negative entropy 问题，但是后来发现 replica symmetry breaking 反应了：phase space 中存在大量具有ultrametric结构的stable states。

## Sec. 1: Stability of replica-symmetric solution
在此将从stability 的角度分析replica-symmetric solution 的问题。replica-symmetric solution 的可靠性的一个必要条件是：free energy 在该解附近对于一个infinitesimal deviations 是stable, 也即在一个small neighborhood 内，free energy 不会因为偏离replica-symmetric solution 而降低。 

为了验证，计算式(PF-Zn)，
$$
\begin{aligned}
[Z^n] =&\exp\left(\frac{\beta^2 J^2nN}{4}\right) \int_{-\infty}^{\infty}\left(\prod_{\alpha<\beta}\text{d}q_{\alpha\beta}\right)\left(\prod_{\alpha}\text{d}m_{\alpha}\right)\\
&\exp\left(-\frac{N\beta^2 J^2 }{2}\sum_{\alpha<\beta}q_{\alpha\beta}^2-\frac{N\beta J_0 }{2}\sum_{\alpha}m_{\alpha}^2 + N\log \text{Tr} \text{ e}^L\right)\\
其中\quad L &= \beta^2 J^2  \sum_{\alpha<\beta}q_{\alpha\beta}S^{\alpha} S^{\beta}+ \beta  \sum_{\alpha}(J_0 m_{\alpha} +h)S^{\alpha}.\tag{PF-Zn}\\
\end{aligned}   
$$
中指数项中围绕replica-symmetric solution 的偏离量 $\delta q_{\alpha\beta} = q_{\alpha\beta} - q$ 和 $\delta m_{\alpha} = m_{\alpha} - m$ 的二次项系数矩阵的本征值是否均为正，即
$$
[Z^n] =\int_{-\infty}^{\infty}\left(\prod_{\alpha<\beta}\text{d}q_{\alpha\beta}\right)\left(\prod_{\alpha}\text{d}m_{\alpha}\right)\exp\left[-N\beta\left(f_{RS}+\left(\text{quadratic in } \delta q_{\alpha\beta} \text{ and } \delta m_{\alpha}\right)\right)\right]
$$
其中$f_{RS}$为replica-symmetric free energy (RS-FE). 
<details class="my-details">
<summary> 解释</summary>

$$
\begin{aligned}
[Z^n]&= \exp\left(\frac{\beta^2 J^2nN}{4}\right) \int_{-\infty}^{\infty}\left(\prod_{\alpha<\beta}\text{d}q_{\alpha\beta}\right)\left(\prod_{\alpha}\text{d}m_{\alpha}\right)\\
&\exp\left(-\frac{N\beta^2 J^2 }{2}\sum_{\alpha<\beta}(q+\delta q_{\alpha\beta})^2-\frac{N\beta J_0 }{2}\sum_{\alpha}(m + \delta m_{\alpha})^2 + N\log \text{Tr} \text{ e}^{L}\right)\\
其中\quad L &= \beta^2 J^2  \sum_{\alpha<\beta}(q+\delta q_{\alpha\beta})S^{\alpha} S^{\beta}+ \beta  \sum_{\alpha}(J_0 (m + \delta m_{\alpha}) +h)S^{\alpha}.\\
\end{aligned}
$$
所以
$$
\begin{aligned}
[Z^n]&= \exp\left(\frac{\beta^2 J^2nN}{4}\right)\exp\left(-\frac{N\beta^2 J^2 }{2}\sum_{\alpha<\beta}q^2-\frac{N\beta J_0 }{2}\sum_{\alpha}m^2 + N\log \text{Tr} \text{ e}^{L_{mq}}\right)\\
&\int_{-\infty}^{\infty}\left(\prod_{\alpha<\beta}\text{d}q_{\alpha\beta}\right)\left(\prod_{\alpha}\text{d}m_{\alpha}\right)\exp\left( N\log \text{Tr} \text{ e}^{\delta L}\right)\\
&\exp\left(-\frac{N\beta^2 J^2 }{2}\sum_{\alpha<\beta}(2q\delta q_{\alpha\beta}+\delta q_{\alpha\beta}^2)-\frac{N\beta J_0 }{2}\sum_{\alpha}(2m\delta m_{\alpha}+\delta m_{\alpha}^2)\right)\\
其中\quad L_{mq} &= \beta^2 J^2  \sum_{\alpha<\beta}qS^{\alpha} S^{\beta}+ \beta  \sum_{\alpha}(J_0 m  +h)S^{\alpha},\\
\quad \delta L &= \beta^2 J^2  \sum_{\alpha<\beta}\delta q_{\alpha\beta}S^{\alpha} S^{\beta}+ \beta  \sum_{\alpha}J_0 \delta m_{\alpha}S^{\alpha}.\\
所以\\
[Z^n]&=\int_{-\infty}^{\infty}\left(\prod_{\alpha<\beta}\text{d}q_{\alpha\beta}\right)\left(\prod_{\alpha}\text{d}m_{\alpha}\right)\exp\left[-N\beta\left(f_{RS}\right)\right]\exp\left( \underline{N\log \text{Tr} \text{ e}^{\delta L}}\right)\\
&\exp\left(-\frac{N\beta^2 J^2 }{2}\sum_{\alpha<\beta}(2q\delta q_{\alpha\beta}+\delta q_{\alpha\beta}^2)-\frac{N\beta J_0 }{2}\sum_{\alpha}(2m\delta m_{\alpha}+\delta m_{\alpha}^2)\right)\\
&画线部分对\delta q_{\alpha\beta}和 \delta m_{\alpha}做二阶展开，与后面项合并，整体可以写为\\
&\text{quadratic in }\delta q_{\alpha\beta} \text{ and }\delta m_{\alpha}\\
&=\int_{-\infty}^{\infty}\left(\prod_{\alpha<\beta}\text{d}q_{\alpha\beta}\right)\left(\prod_{\alpha}\text{d}m_{\alpha}\right)\\
&\exp\left[-N\beta\left(f_{RS}+\left(\text{quadratic in } \delta q_{\alpha\beta} \text{ and } \delta m_{\alpha}\right)\right)\right]
\end{aligned}
$$

</details>

上面积分在$N\to \infty$时，不应该发散，因此需要保证该二次项系数矩阵必须是正定的（或至少是半正定的）。本节证明，在phase diagram 区域低于某条线（称之为AT line），该矩阵存在负的本征值，因此replica-symmetric solution 在该区域是不稳定的。此后的章节将讨论在该区域具有replica symmetry breaking的solution的显式形式及其物理意义。
### Hessian matrix
 在无特别说明考虑无外场的情况（$h=0$）。 为方便起见引入符号，$\beta J q_{\alpha\beta} = y_{\alpha\beta}, \sqrt{\beta J_0}m_{\alpha} = x_{\alpha}$,那么根据(R-FE)，有
$$
\begin{aligned}
[f] =&-\frac{1}{\beta }\lim_{n\to 0}\left\{-\frac{\beta^2 J^2 }{4n}\sum_{\alpha\neq\beta}q_{\alpha\beta}^2-\frac{\beta J_0 }{2n}\sum_{\alpha}m_{\alpha}^2 + \frac{1}{n}\log \text{Tr} \text{ e}^L+\frac{\beta^2 J^2}{4}\right\}\\
=&-\frac{\beta J^2}{4}-\frac{1}{\beta n}\lim_{n\to 0}\left\{-\frac{\beta^2 J^2 }{4}\sum_{\alpha\neq\beta}q_{\alpha\beta}^2-\frac{\beta J_0 }{2}\sum_{\alpha}m_{\alpha}^2 + \log \text{Tr} \text{ e}^L\right\}\\
=&-\frac{\beta J^2}{4}-\frac{1}{\beta n}\lim_{n\to 0}\left\{-\sum_{\alpha<\beta}\frac{1}{2}y_{\alpha\beta}^2-\sum_{\alpha}\frac{1}{2}x_{\alpha}^2\right.\\ 
&\left.+ \log \text{Tr} \exp\left(\beta J  \sum_{\alpha<\beta}y_{\alpha\beta}S^{\alpha} S^{\beta}+  \sqrt{\beta J_0}\sum_{\alpha}x_{\alpha}S^{\alpha}\right)\right\}
\end{aligned}
$$
让我们将$[f]$围绕replica-symmetric solution 进行微小偏离展开，以检验其稳定性，$$x_{\alpha} = x + \epsilon_{\alpha},\ y_{\alpha\beta} = y + \eta_{\alpha\beta}.$$
对上式中的最后一项进行二阶泰勒展开，并且记号$L_{0}=\beta J y\sum_{\alpha<\beta}S^{\alpha} S^{\beta}+  \sqrt{\beta J_0}x\sum_{\alpha}S^{\alpha}$有
$$
\begin{aligned}
&\log \text{Tr} \exp\left(\beta J  \sum_{\alpha<\beta}(y + \eta_{\alpha\beta})S^{\alpha} S^{\beta}+  \sqrt{\beta J_0}\sum_{\alpha}(x + \epsilon_{\alpha})S^{\alpha}\right)\\
=&\log \text{Tr } \text{e}^{L}\Big|_{RS}+\sum_{\alpha<\beta}\eta_{\alpha\beta}\frac{\partial } {\partial y_{\alpha\beta}}\log \text{Tr} \text{ e}^L\Big|_{RS} + \sum_{\alpha}\epsilon_{\alpha}\frac{\partial }{\partial x_{\alpha}}\log \text{Tr} \text{ e}^L\Big|_{RS}\\
&+\frac{1}{2}\sum_{\alpha<\beta}\sum_{\gamma<\delta}\eta_{\alpha\beta}\eta_{\gamma\delta}\frac{\partial^2 }{\partial y_{\alpha\beta}\partial y_{\gamma\delta}}\log \text{ Tr} \text{ e}^L\Big|_{RS}\\
&+\frac{1}{2}\sum_{\alpha\beta}\epsilon_{\alpha}\epsilon_{\beta}\frac{\partial^2 }{\partial x_{\alpha}\partial x_{\beta}}\log \text{ Tr} \text{ e}^L\Big|_{RS}\\
&+\sum_{\alpha<\beta}\sum_{\gamma}\eta_{\alpha\beta}\epsilon_{\gamma}\frac{\partial^2 }{\partial y_{\alpha\beta}\partial x_{\gamma}}\log \text{ Tr} \text{ e}^L\Big|_{RS}\\
&+\text{ higher order terms}\\
=&\underline{\log \text{Tr } \text{e}^{L_0}+ \beta J  \sum_{\alpha<\beta}\eta_{\alpha\beta}\langle S^{\alpha} S^{\beta}\rangle_{L_0}+  \sqrt{\beta J_0}\sum_{\alpha}\epsilon_{\alpha}\langle S^{\alpha}\rangle_{L_0}}\\
&+\frac{\beta^2 J^2}{2}\sum_{\alpha<\beta}\sum_{\gamma<\delta}\eta_{\alpha\beta}\eta_{\gamma\delta}\left(\langle S^{\alpha} S^{\beta} S^{\gamma} S^{\delta}\rangle_{L_0}-\langle S^{\alpha} S^{\beta}\rangle_{L_0}\langle S^{\gamma} S^{\delta}\rangle_{L_0}\right)\\
&+\frac{\beta J_0}{2}\sum_{\alpha\beta}\epsilon_{\alpha}\epsilon_{\beta}\left(\langle S^{\alpha} S^{\beta}\rangle_{L_0}-\langle S^{\alpha}\rangle_{L_0}\langle S^{\beta}\rangle_{L_0}\right)\\
&+\beta J \sqrt{\beta J_0}\sum_{\alpha<\beta}\sum_{\gamma}\eta_{\alpha\beta}\epsilon_{\gamma}\left(\langle S^{\alpha} S^{\beta} S^{\gamma}\rangle_{L_0}-\langle S^{\alpha} S^{\beta}\rangle_{L_0}\langle S^{\gamma}\rangle_{L_0}\right)\\
&+\text{ higher order terms},\qquad 其中\quad \langle ... \rangle_{L_0} = \frac{\text{Tr }(...)\text{ e}^{L_0}}{\text{Tr } \text{e}^{L_0}}.\\
\end{aligned}
$$
这里使用replica-symmetric solution，因为其是stationary point，以及$\text{Tr }\text{e}^{L_0}\to 1,\ (n\to 0)$, 所以一阶项和零阶项（画线部分）为零。所以$[f]$关于$\epsilon_{\alpha}$ 和 $\eta_{\alpha\beta}$ 的二次展开为
$$
\begin{aligned}
\Delta\equiv &\frac{1}{2}\sum_{\alpha<\beta}\sum_{\gamma<\delta}\left[\delta_{(\alpha\beta)(\gamma\delta)}-\beta^2 J^2\left(\langle S^{\alpha} S^{\beta} S^{\gamma} S^{\delta}\rangle_{L_0}-\langle S^{\alpha} S^{\beta}\rangle_{L_0}\langle S^{\gamma} S^{\delta}\rangle_{L_0}\right)\right]\eta_{\alpha\beta}\eta_{\gamma\delta}\\
&+\frac{1}{2}\sum_{\alpha\beta}\left[\delta_{\alpha\beta}-\beta J_0\left(\langle S^{\alpha} S^{\beta}\rangle_{L_0}-\langle S^{\alpha}\rangle_{L_0}\langle S^{\beta}\rangle_{L_0}\right)\right]\epsilon_{\alpha}\epsilon_{\beta}\\
&+\beta J \sqrt{\beta J_0}\sum_{\alpha<\beta}\sum_{\gamma}\left(\langle S^{\alpha} S^{\beta}\rangle_{L_0}\langle S^{\gamma}\rangle_{L_0}-\langle S^{\alpha} S^{\beta} S^{\gamma}\rangle_{L_0}\right)\eta_{\alpha\beta}\epsilon_{\gamma}
\end{aligned}
$$
至多相差一个因子$\beta n$(与符号无关)， 则对于$\epsilon_{\alpha}$和$\eta_{\alpha\beta}$的二次项系数矩阵$G$称为Hessian matrix。 该矩阵的本征值决定了replica-symmetric solution 的稳定性。如果存在负的本征值，则说明在该方向上，free energy 可以通过偏离replica-symmetric solution 而降低，因此replica-symmetric solution 是不稳定的。 

下面给出$G$的具体形式，对于$\epsilon$仅有两类取值
$$
\begin{aligned}
G_{(\alpha\alpha)} &= 1-\beta J_0\left(1-\langle S^{\alpha}\rangle_{L_0}^2\right)\equiv A\\
G_{(\alpha\beta)} &= -\beta J_0\left(\langle S^{\alpha} S^{\beta}\rangle_{L_0}-\langle S^{\alpha}\rangle_{L_0}^2\right)\equiv B\\
\end{aligned}
$$
对于$\eta$有三类取值
$$
\begin{aligned}
G_{(\alpha\beta)(\alpha\beta)} &= 1-\beta^2J^2\left(1-\langle S^{\alpha} S^{\beta}\rangle_{L_0}^2\right)\equiv P\\
G_{(\alpha\beta)(\alpha\gamma)} &= -\beta^2 J^2\left(\langle S^{\beta}S^{\gamma}\rangle_{L_0}-\langle S^{\alpha} S^{\beta}\rangle_{L_0}^2\right)\equiv Q\\
G_{(\alpha\beta)(\gamma\delta)} &= -\beta^2 J^2\left(\langle S^{\alpha} S^{\beta} S^{\gamma} S^{\delta}\rangle_{L_0}-\langle S^{\alpha} S^{\beta}\rangle_{L_0}^2\right)\equiv R\\
\end{aligned}
$$
对于混合项，有两类取值
$$
\begin{aligned}
G_{(\alpha\beta)(\alpha)} &= \beta J \sqrt{\beta J_0}\left(\langle S^{\alpha} S^{\beta}\rangle_{L_0}\langle S^{\alpha}\rangle_{L_0}-\langle S^{\beta}\rangle_{L_0}\right)\equiv C\\
G_{(\alpha\beta)(\gamma)} &= \beta J \sqrt{\beta J_0}\left(\langle S^{\alpha} S^{\beta}\rangle_{L_0}\langle S^{\gamma}\rangle_{L_0}-\langle S^{\alpha} S^{\beta} S^{\gamma}\rangle_{L_0}\right)\equiv D\\
\end{aligned}
$$


其中
$$
\begin{aligned}
\langle S^{\alpha}\rangle_{L_0} &= m = \int \text{ D}z \tanh\tilde{H}(z),\qquad
\langle S^{\alpha} S^{\beta}\rangle_{L_0} = q = \int \text{ D}z \tanh^2\tilde{H}(z)\\
\langle S^{\alpha} S^{\beta} S^{\gamma}\rangle_{L_0} &\equiv t = \int \text{ D}z \tanh^3\tilde{H}(z),\qquad
\langle S^{\alpha} S^{\beta} S^{\gamma} S^{\delta}\rangle_{L_0}\equiv r = \int \text{ D}z \tanh^4\tilde{H}(z)\\
其中\quad \text{ D}z &= \frac{1}{\sqrt{2\pi}} \text{ e}^{-z^2/2}\text{ d}z,\ \tilde{H}(z) = J\sqrt{q}z + J_0 m.\\
\end{aligned}
$$
这里的$m$和$q$是可通过 replica-symmetric solution，后两个可以通过单一有效场的分布计算得到。

<details class="my-details">
<summary> G 矩阵的形式</summary>

首先根据上一节，可以写出分块的$G$矩阵的形式有。
$$
G = \left(\begin{array}{cccc}
M_{\epsilon_{\alpha}\epsilon_{\alpha}} & M_{\epsilon_{\alpha}\eta_{1,2:n}}& M_{\epsilon_{\alpha}\eta_{2,3:n}}&\cdots&M_{\epsilon_{\alpha}\eta_{(n-1),n:n}}\\
M_{\eta_{1,2:n}\epsilon_{\alpha}} & M_{\eta_{1,2:n}\eta_{1,2:n}}&M_{\eta_{1,2:n}\eta_{2,3:n}}&\cdots& M_{\eta_{1,2:n}\eta_{(n-1),n:n}}\\
M_{\eta_{2,3:n}\epsilon_{\alpha}} & M_{\eta_{2,3:n}\eta_{1,2:n}}&M_{\eta_{2,3:n}\eta_{2,3:n}}&\cdots& M_{\eta_{2,3:n}\eta_{(n-1),n:n}}\\
\vdots & \vdots &\vdots & \ddots & \vdots\\
M_{\eta_{(n-1),n:n}\epsilon_{\alpha}} & M_{\eta_{(n-1),n:n}\eta_{1,2:n}}&M_{\eta_{(n-1),n:n}\eta_{2,3:n}}&\cdots& M_{\eta_{(n-1),n:n}\eta_{(n-1),n:n}}\\
\end{array}\right),
$$
指标$\alpha = \{1:n\}$, 这里$G$矩阵是$n+n(n-1)/2 = \frac{n(n+1)}{2}$的方阵。

其中
$$
M_{\epsilon_{\alpha}\epsilon_{\alpha}} = \left(\begin{array}{cccc}
A & B &\cdots& B\\
B & A &\cdots& B\\
\vdots & \vdots & \ddots & \vdots\\
B & B &\cdots& A\\
\end{array}\right)
\quad 
M_{\eta_{i,(i+1):n}\eta_{i,(i+1):n}} = \left(\begin{array}{cccc}
P & Q &\cdots& Q\\
Q & P &\cdots& Q\\
\vdots & \vdots & \ddots & \vdots\\
Q & Q &\cdots& P\\
\end{array}\right)
$$

$$
M_{\eta_{i,(i+1):n}\eta_{j,(j+1):n}} = \left(\begin{array}{ccccc}
R & R &\cdots& R& R\\
\vdots & \vdots  & \vdots& \vdots& \vdots\\
R & R &\cdots&  R& R\\
\hline
Q & Q &\cdots&  Q& Q\\
\hline
Q & R &\cdots&  R& R\\
\vdots & \vdots  & \vdots& \vdots& \vdots\\
R & R &\cdots&  Q& R\\
R & R &\cdots&  R& Q\\
\end{array}\right)
\quad
M_{\epsilon_{\alpha}\eta_{i,(i+1):n}} = \left(\begin{array}{ccccc}
D & D &\cdots& D& D\\
\vdots & \vdots  & \vdots& \vdots& \vdots\\
D & D &\cdots&  D& D\\
\hline
C & C &\cdots&  C& C\\
\hline
C & D &\cdots&  D& D\\
\vdots & \vdots  & \vdots& \vdots& \vdots\\
D & D &\cdots&  C& D\\
D & D &\cdots&  D& C\\
\end{array}\right).
$$
</details>

### Eignvalues of Hessian matrix and AT line
- 首先对paramagnetic phase ($m=0,q=0$)进行分析，在此情况下$m=q=t=r=0$，所以$B=Q=R=C=D=0$(非对角线元素)。所以paramagnetic phase稳定的条件为$A>0,P>0$,所以有$$1-\beta J_0 >0,\quad 1-\beta^2 J^2 >0\Rightarrow T>J_0,T>J,$$这正对应于paramagnetic phase,所以paramagnetic phase 在其存在的区域内是stable的。
- 接下来分析ferromagnetic phase ($m>0,q>0$)和spin glass phase ($m=0,q>0$)的稳定性。在这两种情况下，Hessian matrix 的特征值方程为$$G\mathbf{\mu} = \lambda\mathbf{\mu},\quad \mathbf{\mu}=\left(\begin{aligned}
&\{\epsilon_{\alpha}\}\\&\{\eta_{\alpha\beta}\}
\end{aligned}\right).$$
G有三种类型的本征值 (具体计算过程看原教材附录A,这里只展示$n \to 0$时的结果)：
- 前两类在$n\to 0$的情况下相同：
$$\begin{aligned}
\lambda_{1,2} &= \frac{1}{2}\left\{A - B +P-4Q +3R \pm \sqrt{(A - B -P+4Q -3R))^2 +8(C-D)^2}\right\},\\
\end{aligned}$$对于$\lambda_{1,2}>0$的充分条件是
$$A - B = 1-\beta J_{0}(1-q) > 0,\quad P - 4Q + 3R =1-\beta^2 J^2 (1-4q+3r) > 0.$$
根据replica-symmetric free energy (RS-FE),以及saddle-point条件知
$$A - B = \frac{1}{J_0}\frac{\partial^2 [f]}{\partial m^2}\Big|_{RS}>0,\quad P-4Q+3R = -\frac{2}{\beta J^2}\frac{\partial^2 [f]}{\partial q^2}\Big|_{RS}>0.$$
- 第三类本征值为
$$\lambda_{3} = P - 2Q + R.$$该本征值$\lambda_3>0$等价于$$P-2Q+R = 1-\beta^2J^2(1-2q+r) > 0,$$ 更准确地，
$$\left(\frac{T}{J}\right)^2 > \int \text{ D}z \ \text{sech}^4\left(\beta J \sqrt{q}z + \beta J_0 m\right)\tag{Stability}$$
通过使用replica-symmetric order parameters 的 equation of state (RS-m)和(RS-q)，可以发现spin glass phase 和 mixed phase 不满足稳定条件$\lambda_3>0$，因此replica-symmetric solution 在这两个phase中是不稳定的。ferromagnetic phase 内的stability 极限线（ferromagnetic phase & mixed phase 的边界）称为**AT line**。mixed phase 具有finite ferromagnetic order 但是 replica symmetric solution 不稳定，因此mixed phase 内部也需要考虑replica symmetry breaking 的解。

对于有限外场，且$J_0=0$的情况，replica symmetric solution 的stability 可以类似研究，并且结论只需要将(Stability)中的$J_0 m$换成$h$即可。可以获得相图FIG.3.1所示的结果。
<img src="./image3-1.png" width="80%" height="80%">
具有replica symmetry breaking 的 phase 延申至低温区域，该相也被称为spin glass phase, 当前情况下的稳定性极限也称之为AT line。
## Sec. 2: Replica symmetry breaking
造成replica-symmetric solution 不稳定(replica symmetry breaking)的特征值($\lambda_3$)所对应的本征向量($\mathbf{\mu_3}$)称为**replicon mode**。对于replicon mode 在$\epsilon_{\theta},\epsilon_{\nu}$位置的值为$a$,$b$, 从原教材附录A，式(A.19)和(A.21)可知$a=b$,所以$m_{\alpha}$不存在replica symmetry breaking（这是因为当$\epsilon_{\theta},\epsilon_{\nu}$方向需要扰动相同量时，自由能才会减小，那么对相同的$m$做相同的扰动量，得到的$m$依然是相同的）。 因此仅仅对$q_{\alpha\beta}$是依赖replica index 的, 该依赖关系很不幸无法从第一性原理推导出来。因此人们通过反复试验来验证试探性解是否满足正确解所需的各种必要条件，例如：稳定性条件，热力学一致性条件（positive entropy等），以及与数值模拟和实验结果的一致性等。 

**Parisi solution**是满足所有必要条件的解，且具有丰富的物理意义，因此也被称之为SK model的精确解。在SK model中，Parisi solution 具有无限层的replica symmetry breaking 结构（full RSB）。 本节主要阐述第一步破缺过程。
### Parisi solution
首先，对于SK model 的 replica symmetry solution 的 $q_{\alpha\beta}$写成一个$n\times n$的矩阵形式：
$$
\{q_{\alpha\beta}\} = \left(\begin{array}{ccccc}
0 &  &  & &\\
 & 0 &  &q &\\
 &  & \ddots & &\\
 &  q&  & 0&\\
  &  &  & & 0\\
\end{array}\right).
$$
- 一阶replica symmetry breaking (1RSB)中，引入一个正整数$m_1$($\le n$), 将该矩阵划分为若干个$n/ m_1$个blocks。所有非对角线的blocks 内的元素取值为$q_0$，对角线blocks 内的非对角线元素取值为$q_1$，对角线元素仍为0。例如当$n=6,m_1=3$时，有
$$
\{q_{\alpha\beta}\} = \left(\begin{array}{c|c}
\begin{array}{ccc}
0 & q_1 & q_1\\
q_1 & 0 & q_1\\
q_1 & q_1 & 0\\
\end{array} &
q_0\\
\hline
q_0 & \begin{array}{ccc}
0 & q_1 & q_1\\
q_1 & 0 & q_1\\
q_1 & q_1 & 0\\
\end{array}
\end{array}\right).\tag{1RSB}
$$
- 二阶replica symmetry breaking (2RSB)中，非对角blocks保持不变， 对角block 内部继续划分为$m_2$个更小的blocks, 最内侧blocks 的元素取值为$q_2$，较大blocks 内的非对角线元素保持$q_1$。例如当$n=12,m_1=6,m_2=3$时，有
$$
\{q_{\alpha\beta}\} = \left(\begin{array}{c|c}
\begin{array}{c|c}
\begin{array}{ccc}
0 & q_2 & q_2\\
q_2 & 0 & q_2\\
q_2 & q_2 & 0\\
\end{array} &
q_1\\
\hline
q_1 & \begin{array}{ccc}
0 & q_2 & q_2\\
q_2 & 0 & q_2\\
q_2 & q_2 & 0\\
\end{array}
\end{array} &
q_0\\
\hline
q_0 &
\begin{array}{c|c}
\begin{array}{ccc}
0 & q_2 & q_2\\
q_2 & 0 & q_2\\
q_2 & q_2 & 0\\
\end{array} &
q_1\\
\hline
q_1 & \begin{array}{ccc}
0 & q_2 & q_2\\
q_2 & 0 & q_2\\
q_2 & q_2 & 0\\
\end{array}
\end{array}\\
\end{array}\right).
$$

根据定义则有$n,m_1,m_2,\ldots$都为整数且有序$$n\ge m_1 \ge m_2 \ge \cdots\ge 1.$$

现在定义一个函数$q(x)$，使得
$$
q(x) = q_i,\quad (m_{i+1} < x \le m_i)
$$
由于replica method 需要在$n\to 0$时取极限, 这里有点随意的直接反转了不等式的方向，
$$0\le m_1 \le m_2 \le \cdots \le 1\quad (0\le x \le 1)$$
并且假设$q(x)$是定义在$[0,1]$上的连续函数，这便是**Parisi solution**的基本想法。
### First-step RSB
在此先讨论1RSB的情况。根据(1RSB)和(R-FE)，可以得到1RSB的free energy表达式为
$$
\begin{aligned}
\beta f_{1RSB} =& \frac{\beta^2 J^2}{4}\left[( m_1-1) q_1^2 - m_1 q_0^2 +2 q_1 - 1\right] + \frac{\beta J_0}{2} m^2 -\log 2\\
& - \frac{1}{m_1}\int \text{ D}u \log \int \text{ D}v \cosh^{m_1}\Xi ,\\
其中\quad \Xi &= \beta \left(J\sqrt{q_0}u + J\sqrt{q_1 - q_0}v+J_0 m + h \right).\\
\end{aligned}
$$
这里使用了magnetization 的 replica symmetry,即 $m=m_{\alpha}$.

<details class="my-details">
<summary> 推导过程</summary>

根据(R-FE)，有
$$
\begin{aligned}
-\beta[f] &= \lim_{n\to 0}\frac{[Z^n]-1}{nN}\\
&= \lim_{n\to 0}\left\{-\frac{\beta^2 J^2 }{4n}\sum_{\alpha\neq\beta}q_{\alpha\beta}^2-\frac{\beta J_0 }{2n}\sum_{\alpha}m_{\alpha}^2 + \frac{1}{n}\log \text{Tr} \text{ e}^L+\frac{\beta^2 J^2}{4}\right\},\\
其中\quad L &= \beta^2 J^2  \sum_{\alpha<\beta}q_{\alpha\beta}S^{\alpha} S^{\beta}+ \beta  \sum_{\alpha}(J_0 m_{\alpha} +h)S^{\alpha}
\end{aligned}
$$
因此需要计算
根据(1RSB)，有

$$
\sum_{\alpha<\beta}q_{\alpha\beta}S^{\alpha} S^{\beta} = \frac{1}{2}\left\{q_0 \left(\sum_{\alpha}^{n}S^{\alpha}\right)^2 + (q_1 - q_0) \sum_{\text{blocks}}^{n/ m_1} \left(\sum_{\alpha \in \text{block}}^{m_1} S^{\alpha}\right)^2 - n q_1  \right\},
$$

$$
\lim_{n\to 0}\frac{1}{n}\sum_{\alpha\neq\beta}q_{\alpha\beta}^2 = \lim_{n\to 0}\frac1n\left\{n^2q_0^2+\frac{n}{m_1}m_1^2(q_1^2 - q_0^2)-nq_1^2\right\} = (m_1-1)q_1^2 - m_1 q_0^2.
$$
根据(R-FE),需要求$\frac{1}{n}\log \text{Tr e}^L $
$$
\begin{aligned}
&\frac{1}{n}\log \text{Tr e}^L \\
&= \frac{1}{n}\log \text{Tr} \exp\left(\frac{\beta^2 J^2}{2}\left\{q_0 \left(\sum_{\alpha}^{n}S^{\alpha}\right)^2 + (q_1 - q_0) \sum_{\text{blocks}}^{n/ m_1} \left(\sum_{\alpha \in \text{block}}^{m_1} S^{\alpha}\right)^2 - n q_1  \right\}\right.\\
&\left.+ \beta  \sum_{\alpha}(J_0 m +h)S^{\alpha}\right)\\
&使用\text{Gaussian integral}引入变量u和v_{\text{block}}，\\
&a=\beta^2 J^2 q_0,x=\sum_{\alpha}^{n}S^{\alpha}或a_{\text{block}}=\beta^2 J^2 (q_1-q_0),x_{\text{block}}=\sum_{\alpha \in \text{block}}^{m_1}S^{\alpha}有\\
&= \frac{1}{n}\log \text{Tr} \int \sqrt{\frac{\beta^2 J^2q_0 }{2\pi}} \text{ d}u \int \prod_{\text{blocks}}^{n/ m_1}  \sqrt{\frac{\beta^2 J^2 (q_1-q_0) }{2\pi}}\text{ d}v_{\text{block}}\\
&\exp\left(-\beta^2 J^2q_0 u^2/2+\beta^2 J^2q_0 u\sum_{\alpha}^{n}S^{\alpha}\right.\\
&\left.-\sum_{\text{block}}^{n/m_1}\beta^2 J^2(q_1-q_0) v_{\text{block}}^2/2+\sum_{\text{block}}^{n/m_1}\beta^2 J^2(q_1-q_0) v_{\text{block}}\sum_{\alpha\in\text{block}}^{m_1}S^{\alpha}\right)\\
&\exp\left(-\frac{\beta^2 J^2 n q_1}{2}+ \beta  \sum_{\alpha}(J_0 m +h)S^{\alpha}\right)\\
&= \frac{1}{n}\log \text{Tr} \int \text{ D}u  \int \prod_{\text{blocks}}^{n/ m_1}\text{ D}v_{\text{block}}\exp\left(-\frac{\beta^2 J^2 n q_1}{2}+ \beta  \sum_{\alpha}(J_0 m +h)S^{\alpha}\right)\\
&\exp\left(\beta J\sqrt{q_0} u\sum_{\alpha}^{n}S^{\alpha}+\sum_{\text{block}}^{n/m_1}\beta J\sqrt{q_1-q_0} v_{\text{block}}\sum_{\alpha\in\text{block}}^{m_1}S^{\alpha}\right)\\
&= -\frac{\beta^2J^2q_1}{2}+\frac{1}{n}\log \text{Tr} \int \text{ D}u  \int \prod_{\text{blocks}}^{n/ m_1}\text{ D}v_{\text{block}}\\
&\exp\left(\beta(J_0m+h+ J\sqrt{q_0} u)\sum_{\alpha}^{n}S^{\alpha}+\sum_{\text{block}}^{n/m_1}\beta J\sqrt{q_1-q_0} v_{\text{block}}\sum_{\alpha\in\text{block}}^{m_1}S^{\alpha}\right)\\
&= -\frac{\beta^2J^2q_1}{2}+\frac{1}{n}\log \int \text{ D}u  \int \prod_{\text{blocks}}^{n/ m_1}\text{ D}v_{\text{block}}\\
&\prod_{\text{block}}^{n/m_1}\prod_{\alpha\in\text{block}}^{m_1}\text{Tr } \exp\left(\beta(J_0m+h+ J\sqrt{q_0} u+\beta J\sqrt{q_1-q_0} v_{\text{block}})S^{\alpha}\right)\\
&= -\frac{\beta^2J^2q_1}{2}+\frac{1}{n}\log \int \text{ D}u  \int \prod_{\text{blocks}}^{n/ m_1}\text{ D}v_{\text{block}}\\
&\prod_{\text{block}}^{n/m_1}\prod_{\alpha\in\text{block}}^{m_1}2\cosh \left[\beta(J_0m+h+ J\sqrt{q_0} u+\beta J\sqrt{q_1-q_0} v_{\text{block}})\right]\\
&= -\frac{\beta^2J^2q_1}{2}+\log 2 + \frac{1}{n}\log \int \text{ D}u  \left(\int \text{ D}v\cosh^{m_1} \Xi\right)^{n/ m_1},\\&其中 \Xi = \left[\beta(J_0m+h+ J\sqrt{q_0} u+\beta J\sqrt{q_1-q_0} v)\right]\\
&= -\frac{\beta^2J^2q_1}{2}+\log 2 + \frac{1}{m_1} \int \text{ D}u  \log\int \text{ D}v\cosh^{m_1} \Xi\quad (n\to 0) 洛必达,\\
\end{aligned}  
$$
若使用magnetization 的 replica symmetry($m_{\alpha} = m$)所以可以得到
$$
\begin{aligned}
\beta f_{1RSB} =& \frac{\beta^2 J^2}{4}\left[(m_1-1) q_1^2 - m_1 q_0^2 +2 q_1 - 1\right] + \frac{\beta J_0}{2}m^2- \log 2 \\
&- \frac{1}{m_1} \int \text{ D}u  \log\int \text{ D}v\cosh^{m_1} \Xi \\
其中\quad \Xi &= \beta \left(J\sqrt{q_0}u + J\sqrt{q_1 - q_0}v+J_0 m + h \right).\\
\end{aligned}
$$

</details>

这里的variational parameters 为$m,q_0,q_1,m_1$ 都在$[0,1]$，通过对$f_{1RSB}$使用极值条件，即分别求偏导并令其为零，可以得到1RSB的equation of state：（这里忽略了关于$m_1$的条件，因为比较复杂，且此后不再使用）
$$
m = \int \text{ D}u \frac{\int \text{ D}v \cosh^{m_1}\Xi \tanh\Xi}{\int \text{ D}v \cosh^{m_1}\Xi},\tag{1RSB-m}
$$
$$
q_0 = \int \text{ D}u \left(\frac{\int \text{ D}v \cosh^{m_1}\Xi \tanh\Xi}{\int \text{ D}v \cosh^{m_1}\Xi}\right)^2,\tag{1RSB-q0}
$$
$$
q_1 = \int \text{ D}u \frac{\int \text{ D}v \cosh^{m_1}\Xi \tanh^2\Xi}{\int \text{ D}v \cosh^{m_1}\Xi},\tag{1RSB-q1}
$$

<details class="my-details">
<summary> 推导过程</summary>

根据极值条件，有
$$
\begin{aligned}
\beta\frac{\partial f_{1RSB}}{\partial m} =& \beta J_0 m - \beta J_0 \int \text{ D}u \frac{\int \text{ D}v \cosh^{m_1 -1}\Xi \sinh\Xi}{\int \text{ D}v \cosh^{m_1}\Xi} = 0,\\
\Rightarrow & m = \int \text{ D}u \frac{\int \text{ D}v \cosh^{m_1}\Xi \tanh\Xi}{\int \text{ D}v \cosh^{m_1}\Xi},\\
\end{aligned}
$$
$$
\begin{aligned}
\beta\frac{\partial f_{1RSB}}{\partial q_0} =& - \frac{\beta^2 J^2m_1}{2}q_0 - \beta J\int \text{ D}u \frac{\int \text{ D}v \cosh^{m_1}\Xi \tanh\Xi\left(\frac{u}{2\sqrt{q_0}}-\frac{v}{2\sqrt{q_1-q_0}}\right)}{\int \text{ D}v \cosh^{m_1}\Xi} = 0,\\
\Rightarrow  -\frac{\beta J m_1}{2}q_0 =&\int \text{ D}u \frac{\int \text{ D}v \cosh^{m_1}\Xi \tanh\Xi\left(\frac{u}{2\sqrt{q_0}}-\frac{v}{2\sqrt{q_1-q_0}}\right)}{\int \text{ D}v \cosh^{m_1}\Xi},\\
-\frac{\beta J m_1}{2}q_0 & =\frac{1}{2\sqrt{q_0}}\int u \text{ D}u \frac{\int \text{ D}v \cosh^{m_1}\Xi \tanh\Xi}{\int \text{ D}v \cosh^{m_1}\Xi},\\
&-\frac{1}{2\sqrt{q_1-q_0}}\int \text{ D}u \frac{\int v\text{ D}v \cosh^{m_1}\Xi \tanh\Xi}{\int \text{ D}v \cosh^{m_1}\Xi}\\
&这里使用分布积分,且注意v\text{D}v = -\text{d}\exp(-v^2/2)/\sqrt{2\pi}\\
& =0+\frac{\beta J m_1}{2}\left(\int \text{ D}u\frac{\int \text{ D}v \cosh^{m_1}\Xi (\tanh^2\Xi+\frac{1}{m_1}\text{sech}^2 \Xi)}{\int \text{ D}v \cosh^{m_1}\Xi}\right.\\
&\left.-\left(\frac{\int \text{ D}v \cosh^{m_1}\Xi \tanh\Xi}{\int \text{ D}v \cosh^{m_1}\Xi}\right)^2\right)\\
&-0-\frac{\beta J m_1}{2}\int \text{ D}u \frac{\int \text{ D}v \cosh^{m_1}\Xi (\tanh^2\Xi+\frac{1}{m_1}\text{sech}^2 \Xi)}{\int \text{ D}v \cosh^{m_1}\Xi}\\
\Rightarrow & q_0 = \int \text{ D}u \left(\frac{\int \text{ D}v \cosh^{m_1}\Xi \tanh\Xi}{\int \text{ D}v \cosh^{m_1}\Xi}\right)^2,\\
\end{aligned}
$$
$$
\begin{aligned}
\beta\frac{\partial f_{1RSB}}{\partial q_1} =&\frac{\beta^2 J^2(m_1-1)}{2}q_1 + \frac{\beta^2 J^2}{2} - \beta J\int \text{ D}u \frac{\int \text{ D}v \cosh^{m_1}\Xi \tanh\Xi\left(\frac{v}{2\sqrt{q_1-q_0}}\right)}{\int \text{ D}v \cosh^{m_1}\Xi} = 0,\\
\Rightarrow  &\frac{\beta^2 J^2(m_1-1)}{2}q_1 + \frac{\beta^2 J^2}{2} = \beta J \frac{1}{2\sqrt{q_1-q_0}}\int \text{ D}u \frac{\int v\text{ D}v \cosh^{m_1}\Xi \tanh\Xi}{\int \text{ D}v \cosh^{m_1}\Xi},\\
&这里使用分布积分\\
&= 0+\frac{\beta^2 J^2}{2} \int \text{ D}u \frac{\int \text{ D}v \cosh^{m_1}\Xi (m_1 \tanh^2\Xi+\text{sech}^2 \Xi)}{\int \text{ D}v \cosh^{m_1}\Xi}\\
&= \frac{\beta^2 J^2}{2} +\frac{\beta^2 J^2(m_1-1)}{2} \int \text{ D}u \frac{\int \text{ D}v \cosh^{m_1}\Xi \tanh^2\Xi}{\int \text{ D}v \cosh^{m_1}\Xi}\\
\Rightarrow & q_1 = \int \text{ D}u \frac{\int \text{ D}v \cosh^{m_1}\Xi \tanh^2\Xi}{\int \text{ D}v \cosh^{m_1}\Xi}.
\end{aligned}
$$

</details>

比较replica symmetric solution，知(1RSB-m)关于$m$的方程D$u$后面的被积函数表示1RSB矩阵一个block的magnetization, $m$为通过对其 Gaussian weight 平均得到。 类似地，(1RSB-q1)表示各对角block的spin glass order parameter在所有blocks上的平均。 而(1RSB-q0)是先计算单个block 的magnetization, 然后取不同block之间该强度的乘积，这是一种interblock spin glass order parameter。 如果假设1RSB, 带入(R-overlap)的定义，当$\alpha$和$\beta$属于同一block时，$q_{\alpha\beta}$得到(1RSB-q1)，当$\alpha$和$\beta$属于不同block时，$q_{\alpha\beta}$得到(1RSB-q0)。

当$J_0 = h = 0$时，$\Xi$关于$u,v$均为奇函数，因此有$m=0$是(1RSB-m)的唯一解。对(1RSB-q1)右手边关于较小的$q_0$和$q_1$做Taylor展开，首项得到$\beta^2 J^2 q_1$， 所以对于$T<T_f=J$, $q_1>0$。 因此RS 和1RSB给出了相同的transition point。参数$m_1$在$T_f$处为1，并随温度降低而减小。
### Stability of 1RSB solution
对于1RSB solution 的稳定性分析与RS solution 类似。略显复杂，这里不再展示求解过程。在此对于$J_0=h=0$的情况举例几个要点。
- Hessian elements 的所有下标$\alpha, \beta, \gamma, \delta$均在一个block 内;
- Hessian elements 的下标$\alpha, \beta, \gamma, \delta$属于不同的block 内;

如果$\alpha$和$\beta$属于同一block 内，这个replicon mode 对于1RSB的无穷小偏差的stability 条件为
$$
\lambda_3= P-2Q +R = 1 - \beta^2 J^2 \int \text{ D}u \frac{\int \text{ D}v \cosh^{m_1-4}\Xi }{\int \text{ D}v \cosh^{m_1}\Xi} >0,
$$
如果$\alpha$和$\beta$属于不同block 内，这个replicon mode 对于1RSB的无穷小偏差的stability 条件为
$$
\lambda_3 = P - 2Q + R = 1 - \beta^2 J^2 \int \text{ D}u \left(\frac{\int \text{ D}v \cosh^{m_1-1}\Xi }{\int \text{ D}v \cosh^{m_1}\Xi}\right)^4 >0.
$$
根据Schwarz inequality,知道第一个条件蕴含第二个条件，因此只需要考虑第一个条件即可。该条件在spin glass phase 内不满足,这与RS solution 的情况类似. 通过数值计算可以知道，尽管$\lambda_3$仍为负值，但其绝对值小于RS solution 的对应值，这表明解朝着稳定的方向前进。在$J_0=0,T=0$时，每个spin的entropy 从RS solution 的负值-0.16($=-\frac{1}{2\pi}$)增加到1RSB solution 的-0.01，因此进一步的replica symmetry breaking 有望使得entropy得到进步改进。 

<details class="my-details">
<summary> 证明过程</summary>

根据Schwarz inequality
$$
\left(\int \text{ D}v f(v)g(v) \right)^2 \le \left(\int \text{ D}v f^2(v) \right)\left(\int \text{ D}v g^2(v) \right),
$$
所以
$$
\begin{aligned}
&\left(\int \text{ D}v \cosh^{m_1-1}\Xi \right)^2 \le
\left(\int \text{ D}v \cosh^{m_1-2}\Xi \right) \left(\int \text{ D}v \cosh^{m_1}\Xi \right) \\
\Rightarrow&\left(\int \text{ D}v \cosh^{m_1-1}\Xi \right)^4 \le
\left(\int \text{ D}v \cosh^{m_1-2}\Xi \right)^2 \left(\int \text{ D}v \cosh^{m_1}\Xi \right)^2 \\
\Rightarrow&\left(\int \text{ D}v \cosh^{m_1-1}\Xi \right)^4 \le
\left(\int \text{ D}v \cosh^{m_1-4}\Xi \right)\left(\int \text{ D}v \cosh^{m_1}\Xi \right) \left(\int \text{ D}v \cosh^{m_1}\Xi \right)^2 \\
\Rightarrow&\frac{\int \text{ D}v \cosh^{m_1-4}\Xi }{\int \text{ D}v \cosh^{m_1}\Xi} \ge \left(\frac{\int \text{ D}v \cosh^{m_1-1}\Xi }{\int \text{ D}v \cosh^{m_1}\Xi}\right)^4
\end{aligned}
$$

</details>

## Sec. 3: Full RSB solution
让我们继续考虑multiple-step RSB 计算free energy 的过程, 且简单起见，考虑$J_0=0$的情况。
### Physical quantities
经过类似1RSB的计算过程，然后引入连续函数$q(x)$，可以得到full RSB 的free energy 表达式为
$$
\begin{aligned}
\beta f_{FRSB} =& -\frac{\beta^2 J^2}{4}\left(1 + \int_0^1 \text{ d}x \ q^2(x) - 2 q(1)\right) - \int \text{ D}uf_0(0,\sqrt{q(0)}u),\\
\end{aligned}
$$
其中函数$f_0(x,h)$满足Parisi 方程
$$
\frac{\partial f_0(x,h)}{\partial x} = -\frac{J^2}{2}\frac{\text{d}q}{\text{d}x}\left\{\frac{\partial^2 f_0}{\partial h^2} + x \left(\frac{\partial f_0}{\partial h}\right)^2\right\},
$$
初值条件为
$$
f_0(1,h) = \log 2 \cosh(\beta h).
$$
<details class="my-details">
<summary> 推导过程</summary>

根据(R-FE)，有
$$
\begin{aligned}
-\beta[f] &= \lim_{n\to 0}\frac{[Z^n]-1}{nN}\\
&= \lim_{n\to 0}\left\{-\frac{\beta^2 J^2 }{4n}\sum_{\alpha\neq\beta}q_{\alpha\beta}^2-\frac{\beta J_0 }{2n}\sum_{\alpha}m_{\alpha}^2 + \frac{1}{n}\log \text{Tr} \text{ e}^L+\frac{\beta^2 J^2}{4}\right\},\\
其中\quad L &= \beta^2 J^2  \sum_{\alpha<\beta}q_{\alpha\beta}S^{\alpha} S^{\beta}+ \beta  \sum_{\alpha}(J_0 m_{\alpha} +h)S^{\alpha}
\end{aligned}
$$
因此我们需要处理$\sum_{\alpha<\beta}q_{\alpha\beta}^2$以及$\log \text{Tr e}^L$
Step 1: 考虑更一般的$\sum_{\alpha<\beta}q_{\alpha\beta}^l$，根据full RSB 的定义，有
$$
\begin{aligned}
&\sum_{\alpha<\beta}q_{\alpha\beta}^l \\
&=q_0^l n^2 +(q_1^l-q_0^l)m_1^2 \frac{n}{m_1} + (q_2^l - q_1^l)m_2^2 \frac{m_1}{m_2} \frac{n}{m_1} + \cdots \\
&+ (q_K^l - q_{K-1}^l)m_K^2 \frac{m_{K-1}}{m_K} \cdots \frac{m_1}{m_2} \frac{n}{m_1} - n q_K^l\\
&=q_0^l n^2 +(q_1^l-q_0^l)m_1n + (q_2^l - q_1^l)m_2n + \cdots+ (q_K^l - q_{K-1}^l)m_Kn - n q_K^l\\
&= n\sum_{j=0}^{K}(m_j-m_{j+1})q_j^l, \quad (m_0=n,m_{K+1}=1)
\end{aligned}
$$
在$n\to 0$时，我们可以用$-\text{d}x$替代$m_j-m_{j+1}$,有
$$
\lim_{n\to 0}\frac{1}{n}\sum_{\alpha<\beta}q_{\alpha\beta}^l = \lim_{n\to 0}\sum_{j=0}^{K}(m_j-m_{j+1})q_j^l = -\int_0^1 \text{ d}x \ q^l(x).
$$
在此特别地，可以根据internal energy 的定义，对于$J_0=0$,$h=0$得到full RSB 的internal energy 表达式为(省略了configurational average 符号)
$$
\begin{aligned}
E &= \frac{\partial }{\partial \beta}(\beta f_{FRSB}) = \frac{\beta J^2}{2}\frac{1}{n}\sum_{\alpha\neq\beta}q_{\alpha\beta}^2 -\frac{1}{n}\frac{\beta J^2\sum_{\alpha\neq \beta}q_{\alpha\beta}\text{Tr }S^{\alpha}S^{\beta}\text{e}^L}{\text{Tr e}^L} -\frac{\beta J^2}{2}\\
&因为\text{Tr }S^{\alpha}S^{\beta}\text{e}^L/\text{Tr e}^L = q_{\alpha\beta}, 且\text{Tr }\text{e}^L\to 1所以有\\
&= -\frac{\beta J^2}{2}\left(1 + \frac{1}{n}\sum_{\alpha\neq\beta}q_{\alpha\beta}^2\right)\to -\frac{\beta J^2}{2}\left(1 - \int_0^1 \text{ d}x \ q^2(x)\right).
\end{aligned}
$$
magnetic susceptibility 的表达式为
$$
\begin{aligned}
\chi &= \frac{\partial m}{\partial h}\Big|_{h\to 0} = - \frac{\partial^2}{\partial h^2}(f_{FRSB})\Big|_{h\to 0} = \frac{\partial}{\partial h}(\frac{1}{n}\frac{\sum_{\alpha}\text{Tr }S^{\alpha} \text{e}^L}{\text{Tr e}^L}) \\
&= \frac{\beta}{n}\frac{\text{Tr }\text{e}^L\cdot(\sum_{\alpha\neq \beta}\text{Tr }S^{\alpha}S^{\beta}\text{e}^L+n\text{Tr }\text{e}^L)-(\sum_{\alpha}\text{Tr }S^{\alpha} \text{e}^L)^2}{(\text{Tr e}^L)^2}\\
&\to \beta\left(1 + \frac{1}{n}\sum_{\alpha\neq \beta}q_{\alpha\beta}\right) \to \beta\left(1 - \int_0^1 \text{ d}x \ q(x)\right).
\end{aligned}
$$

Step 2: 计算$\log \text{Tr e}^L$

这一部分先省略，具体查看 原教材附录B。

</details>

### Order parameter near the critical point
对于FRSB所得到free energy 关于$q(x)$的极值条件，一般很难求解。尽管如此，当温度接近临界点时，$q(x)$较小，可以通过Landau expansion 的方法推导出一些显式结果。这里展示这个过程的本质。

当$J_0=h=0$时，(R-FE)关于$q_{\alpha\beta}$的fourth order expansion 为
$$
\begin{aligned}
\beta [f] =&\lim_{n\to 0} \frac{1}{n}\left\{\frac{1}{4}\left(\frac{T^2}{T_f^2}-1\right) \text{Tr }Q^2-\frac{1}{6} \text{Tr } Q^3\right.\\
&\left.-\frac{1}{8}\text{Tr }Q^4 +\frac14 \sum_{\alpha\neq\beta\neq\gamma}Q_{\alpha\beta}^2Q_{\alpha\gamma}^2 -\frac{1}{12}\sum_{\alpha\neq\beta}Q_{\alpha\beta}^4  \right\}
\end{aligned}
$$
这里省略了与q无关的常数项。此处的算子 $\text{Tr }$ 表示对replica space 的求和。这里引入了记号$$Q_{\alpha\beta} = \beta^2 J^2 q_{\alpha\beta}.$$

....**(这里还没看明白)**

可以得到
$$
q(x) = \left\{\begin{array}{ll}x/2, &0\le x \le x_1=2q(1)\\ q(1), & x_1 \le x \le 1\end{array}\right.
$$
其中$q(1) = |\theta|+\mathcal{O}(\theta^2),\theta = (T_f - T)/T_f.$, 如图FIG.3.2.
<img src="./image3-2.png" width="50%" height="50%">

### Vertical phase boundary
在critical point 附近， magnetic susceptibility 的表达式为
$$
\chi = \beta\left(1 - \int_0^1 \text{ d}x \ q(x)\right) = \beta\left(1 - q(1)\right) = \beta\left(1 - |\theta|\right) = \frac{1}{T_f} = \frac{1}{J}.
$$
这一事实不仅仅只对critical point 附近成立，而且对于critical point 以下都成立（这个地方没证明）。利用这一事实可以证明spin glass phase 与 ferromagnetic phase 之间的phase boundary 是垂直的。

... **(这里还没看明白)**

对Parisi solution 的stability 进行分析，replicon mode 的eignvalue 为 0，这意味着Parisi RSB solution 是marginally stable 的。目前尚未发现其他解，其Hessian具有非负replicon eignvalue。
## Sec. 4: Physical significance of RSB
Parisi type RSB solution 最初是为了解决replica symmetric solution 中的争议。随后人们发现该solution 具有深刻的物理意义。
### Multivalley structure
在ferromagnet的free energy 与系统state 之间有简单的结构如图FIG.3.3(a)所示。 然而spin glass 的free energy landscape 则复杂得多，如图FIG.3.3(b)所示,存在很多个极小值，且极小值之间的barriers随系统的size增加而增加。如果接受这种physical picture, 便可以对RSB有更清晰的解释。
<img src="./image3-3.png" width="70%" height="70%">

假设系统size是大的但不是无穷，那么系统会在某一free energy 的极小值附近的valley陷留相当长时间。 然而经过足够长时间，系统会克服barrier，跳跃到另一个极小值附近，从而遍历所有valley。因此在有限时间尺度下，系统的物理性质由一某一个valley 决定;但在极长时间后，观测到的行为将反应所有的valley的性质。后一种情形正是传统平衡统计力学的表述中所假设的情况。

现在我们对free energy valley 用索引 $a$，将系统限制在特定的valley,那么该valley的magnetization, 记$m_{i}^a = \langle S_i \rangle_a$, 这类似于ferromagnet中仅考虑$m>0$的情况。

### $q_{EA}$ and $\overline{q}$

为了理解单个valley 的spin ordering,必须取热力学极限$N\to \infty$，通过无限提升barrier,将目标valley 与其他valleys隔离开来，因此可以忽略valleys 之间的transitions。因此单个valley的order parameter (Edwards-Anderson order parameter)定义为
$$
q_{EA} = \lim_{t\to \infty}\lim_{N\to \infty} [\langle S_i(t_0)S_i(t_0+t) \rangle].
$$
该物理量用于衡量长时间后，site $i$ 上的spin state与初始时间$t_0$的相似性(or overlap)。该物理量的实际意义表明其等于average of the square of local magnetization $(m_i^a)^2$:
$$
q_{EA} = \left[\sum_{a}P_a(m_i^a)^2\right] = \left[\sum_{a}P_a\frac1N\sum_{i}(m_i^a)^2\right].
$$
其中$P_a$是valley $a$的权重(probability weight)，$P_a=\text{e}^{-\beta F_a}/Z$. 在第二个等式中，假设了average squared local magnetization 在不同site 上是相同的。

我们也引入另一个oder parameter $\overline{q}$，它表示长时间观测下对不同valleys的平均。这个序参量定义为
$$
\overline{q} = \left[\left(\sum_{a}P_a m_i^a\right)\right] = \left[\sum_{ab}P_a P_b m_i^a m_i^b\right] = \left[\sum_{ab}P_a P_b \frac1N\sum_{i}m_i^a m_i^b\right].
$$
如果这里重写$m_i = \sum_a P_a m_i^a$,那么
$$
\overline{q} = [m_i^2] = [\langle S_i \rangle^2].
$$
上式表明$\overline{q}$衡量的是不同valleys 之间的average with overlap, 对长时间间的transition而言是个合适的量。

如果仅存在单一valley,那么显然有$q_{EA} = \overline{q}$. 但一般而言，存在多个valleys,因此$q_{EA} > \overline{q}$. 这两个序参量之差$$\Delta q = q_{EA} - \overline{q} \ge 0$$可用于衡量 the existence of a multivalley structure. 通常预期在$q_{EA}$和$\overline{q}$存在continuous spectrum of order parameters 对应不同valleys之间的transitions程度。 这将对应 Parisi RSB solution 中的continuous function $q(x)$。

### Distribution of overlaps
两个不同valleys $a$和$b$之间的overlap 定义为
$$
q_{ab} = \frac1N \sum_{i} m_i^a m_i^b.
$$
当两个valleys 相同时取最大值，当两个valleys 完全不相关时取最小值。 让我们对于给定random interaction $J$，定义overlap $q_{ab}$ 的distribution as 
$$
P_J(q) = \sum_{ab} P_a P_b \delta(q - q_{ab}).
$$
并且定义其configurational average 为
$$
P(q) = [P_J(q)].
$$
在一个像ferromagnetic 的 simple system 中， 仅存在两个通过overall spin reversal 相连的 valleys, 并且$q_{ab}$仅仅假设$\pm m^2$. 
<img src="./image3-4.png" width="50%" height="50%">
正如图FIG.3.4所示，$P(q)$在$q=\pm m^2$处有两个delta function peaks。若存在连续不同态的 multivalley strusture, 那么$q_{ab}$将呈现不同的取值，且$P(q)$会在某一区间内连续分布，如图FIG.3.5所示。

### Replica representation of the order parameter
在此节中，将探讨RSB和distribution function $P(q)$的连续部分之间的联系。 在replica formalism 中，量$q_{\alpha\beta}$是replicas $\alpha$和$\beta$之间的overlap，$$q_{\alpha\beta} = \langle S_i^{\alpha} S_i^{\beta}\rangle.$$
在RSB中，对于不同的pair $(\alpha,\beta)$, $q_{\alpha\beta}$可以取不同的值。 对于statistical-mechanical average of $q_{\alpha\beta}$, 有
$$
\overline{q} = \lim_{n \to 0}\frac{1}{n(n-1)}\sum_{\alpha\neq\beta} q_{\alpha\beta}.
$$
这与前面定义的$\overline{q}$是一致的。另一方面，single valley 的 spin glass order parameter并不反应valleys之间的差异，因此应该当大于order parameter 任何其他的取值。可以将$q_{EA}$表示replica method中$q_{\alpha\beta}$的最大值:
$$
q_{EA} = \max_{\alpha\beta} q_{\alpha\beta} = \max_{x} q(x).
$$
让我们定义accumulated distribution of $P(q)$:
$$
x(q) = \int_{0}^{q} \text{ d}q' P(q'),\quad \text{ thus }\quad P(q) = \frac{\text{d}x(q)}{\text{d}q}.
$$
使用这个定义，因此对于statistical-mechanical average是所有可能$q$值的平均，
$$
\overline{q} = \int \text{ d}q' \ P(q') q = \int_0^1 \text{ d}x \ q(x).
$$
所以parameters $q_{EA}$ and $\overline{q}$ 都能被Parisi RSB solution 中的$q(x)$所描述。 如果有很多个valleys, $q_{\alpha\beta}$有不同的取值，$P(q)$不能被表达成简单的delta function peaks。在此情况下$q(x)$具有非平凡的结构，对应Parisi type RSB solution。因此3.3.2节中spin glass phase 空间的multivalley structure。

### Ultrametricity
Parisi RSB solution 具有 ultrametric. 对于三个不同的状态distribution function 的 configurational average 定义为 
$$
P(q_{1},q_{2},q_{3}) = \left[\sum_{abc} P_a P_b P_c \delta(q_{1}-q_{ab})\delta(q_{2}-q_{bc})\delta(q_{3}-q_{ca})\right].
$$
并且能用RSB method 评价为
$$
[P(q_{1},q_{2},q_{3})] = \frac12 P(q_1)x(q_1)\delta(q_1 - q_2)\delta(q_2 - q_3) + \frac12 \{P(q_1)P(q_2)\theta(q_1 - q_2)\delta(q_2 - q_3) + (\text{ two terms with 1,2,3 permuted})\}.
$$
在此$x(q)$与前面定义相同，且$\theta(x)$是Heaviside step function, $=1,x>0$ or $=0,x<0$。如果三个overlaps $q_1,q_2,q_3$均相等时，首项才非零，或者有两项相等时$(q_1>q_2,q_2=q_3)$，第二项才非零。 这意味着三个状态之间的距离应该构成等边三角形或等腰三角形，可以解释为状态空间具有树形结构如图FIG.3.5所示。满足此条件的三点距离度量空间被称为ultrametric space。
<img src="./image3-5.png" width="70%" height="70%">

## Sec. 5: TAP equations
关于spin glass 的不同观点由Thouless, Anderson and Palmer (TAP) 提出的equation of state 提供，该方程涉及spin glass 中的local magnetization。
### TAP equation
对于给定的random interaction $J$, SK model 的 local magnetization满足TAP equation:
$$
m_i = \tanh\left[\beta\left(\sum_{j} J_{ij} m_j + h_i - \beta \sum_{j} J_{ij}^2 (1-m_j^2)m_i \right)\right].
$$
首先第一项表示usual internal field。第三项被称为Onsager reaction term, 并且它添加了 remove the effect of self-response. magnetization $m_i$ 通过 internal field $J_ij m_i$ 影响 site $j$ 的spin, 改变了site $j$ 的 magnetization $\Xi_{jj}J_{ij}m_i.$ 这里
$\Xi_{jj} = \partial m_j/\partial h_j = \beta (1-m_j^2)$ 是site $j$ 的local susceptibility. 那么 internal field 在 site $i$ 会有增量
$$
J_{ij}\Xi_{jj}J_{ij}m_i = \beta J_{ij}^2 (1-m_j^2)m_i.
$$
由于site $i$ 不应该响应它自己产生的field，因此需要从internal field 中减去该项，这就是Onsager reaction term 的物理意义。 在infinite-range interactions, 这个interaction scales as $J_{ij} = J/N$, 因此第三项忽略不计因为其是$\mathcal{O}(1/N)$. 在SK model 中，$J_{ij}^2 = \mathcal{O}(1/N)$所以第三项和前两项同阶不应该忽略。 TAP equation 为处理spin glass 问题提供了基础，且无需对$J$的分布进行构型平均。

TAP equation 可以对下面free energy,
$$
\begin{aligned}
\beta f_{TAP} =& -\frac12\sum_{i\neq j} J_{ij} m_i m_j - \sum_i h_i m_i - \frac{\beta}{4}\sum_{i \neq j} J_{ij}^2(1-m_i^2)(1-m_j^2)\\
&+ T \sum_{i}\left\{\frac{1+m_i}{2}\log\frac{1+m_i}{2} + \frac{1-m_i}{2}\log\frac{1-m_i}{2}\right\},
\end{aligned}
$$
取极值条件得到。 该free energy前两项表示internal energy, 第三项是reaction term, 最后一项是entropy.

对于上面的free energy 如何得到，可以通过对magnetization 的 expansion of free energy 来得到。
$$
-\beta \tilde{f}(\alpha,\beta,\textbf{m}) = \log \text{Tr } \exp\left[\beta H(\alpha)\right] - \beta \sum_i h_i m_i,
$$
其中 $H(\alpha) = \alpha H_0 - \sum_i h_i S_i$ 和 $\mathbf{m} = \{m_i\}$. 这里的$H_0$是SK Hamiltonian:
$$
H_0 = -\sum_{i<j} J_{ij} S_i S_j.
$$
并且$h_i(\alpha,\beta,\mathbf{m})$是Lagrange multiplier, 使得$m_i = \langle S_i \rangle_{\alpha}$, 其中$\langle \cdot \rangle_{\alpha}$表示在Hamiltonian $H(\alpha)$下的热力学平均。 对$\tilde{f}$在$\alpha = 0$处展开二阶，然后取$\alpha = 1$，得到TAP free energy。这被称为Plefka expansion。

我们对其微分得到
$$
\begin{aligned}
\frac{\partial (\tilde{f})}{\partial \alpha} &= \langle H_0 \rangle_{\alpha}  \\
\frac{\partial^2 (\tilde{f})}{\partial \alpha^2} &= -\beta \left\langle H_0\left(H_0 - \langle H_0 \rangle_{\alpha} - \sum_i \frac{\partial h_i}{\partial \alpha} ( S_i - m_i) \right)\right\rangle_{\alpha}
\end{aligned}
$$
在$\alpha = 0$处，有
$$
\begin{aligned}
\tilde{f}\Big|_{\alpha=0}&= T\sum_i \left\{\frac{1+m_i}{2}\log\frac{1+m_i}{2} + \frac{1-m_i}{2}\log\frac{1-m_i}{2}\right\},\\
\frac{\partial \tilde{f}}{\partial \alpha}\Big|_{\alpha=0} &= -\frac12 \sum_{i\neq j} J_{ij} m_i m_j,\\
\frac{\partial^2 \tilde{f}}{\partial \alpha^2}\Big|_{\alpha=0} &= -\frac12\beta \sum_{i\neq j} J_{ij}^2 (1-m_i^2)(1-m_j^2).
\end{aligned} 
$$
二阶项提供了Onsager reaction term。所以有$f_{TAP} = \tilde{f}(0) + \tilde{f}'(0) + \frac12 \tilde{f}''(0)$. 同样地可以证明，上述展开式在$\alpha\ge 1$时的收敛条件等价于free energy 的稳定性条件也即Hessian $\{\partial^2 f_{TAP} / \partial m_i \partial m_j\}$是non-negative definite。只要满足稳定性条件，展开式中所有高阶项在thermodynamic limit 下均为零。

### Cavity method 

让我们考虑local magnetization $m_i = \langle S_i \rangle$,其中thermal average 在 single valley 内进行。 这个目标是展示local magnetization 满足TAP equation。 首先考虑推导distribution function of local spin $P_i(S_i)$, 然后根据此进行上述的thermal average。在此考虑无外场的情形$h_i=0$。 那么local magnetization 被local field $\tilde{h}_i = \sum_{j} J_{ij} S_j$ 所决定. 所以$S_i$和$\tilde{h}_i$的joint distribution 能被写为
$$
P(S_i, \tilde{h}_i) \propto \text{e}^{\beta S_i \tilde{h}_i} P_i(\tilde{h}_i \backslash S_i). 
$$
其中 $P_i(\tilde{h}_i \backslash S_i)$ 是在移除site $i$ 后local field $\tilde{h}_i$ 的distribution. More explicitly,
$$
P_i(\tilde{h}_i \backslash S_i) = \text{Tr }_{\mathbf{S}\backslash S_i} \delta\left(\tilde{h}_i - \sum_{j} J_{ij} S_j\right) P(\mathbf{S}\backslash S_i),
$$
其中$P(\mathbf{S}\backslash S_i)$表示除去site $i$的所有spins的joint distribution. The distribution
$$
P_i(S_i)\propto \int \text{ d}\tilde{h}_i \ \text{e}^{\beta S_i \tilde{h}_i} P_i(\tilde{h}_i \backslash S_i).
$$
因此$P(\tilde{h}_i \backslash S_i)$可以由此再得到。

在SK model 中，相互作用范围是不被限制的，求和$\sum_{j} J_{ij} S_j$ 中有$N-1$项。若所有这些项目都独立同分布，则central limit theorem 适用，因此确保$\tilde{h}_i$ 是 Gaussian distributed. 这在图FIG.3.6中所示，Bethe lattice 中当移除一个site时，该结构会分解为相互独立的子树。让我们对于SK model ，不同sites 之间的correlations是弱的。我们有
$$
P_i(\tilde{h}_i \backslash S_i) = \frac{1}{\sqrt{2\pi V_i^2}} \exp\left[-\frac{(\tilde{h}_i - \langle \tilde{h}_i \rangle_{\backslash i})^2}{2V_i^2}\right],
$$
结合上面$P_i(S_i)$的表达式，可以得到
$$
m_i = \tanh \beta \langle \tilde{h}_i \rangle_{\backslash i} $$
因此下面分析$\langle \tilde{h}_i \rangle_{\backslash i}$，
首先对于standard average of the local field (without the cavity),
$$
\langle \tilde{h}_i \rangle = \text{Tr }_{S_i} \int \text{ d}\tilde{h}_i \ \tilde{h}_i P(S_i, \tilde{h}_i)
$$
在此使用$P(S_i, \tilde{h}_i)$的表达式和Gaussian form of $P_i(\tilde{h}_i \backslash S_i)$, 可以得到
$$
\langle \tilde{h}_i \rangle = \langle \tilde{h}_i \rangle_{\backslash i} + \langle V_i S_i \rangle.
$$
或
$$
\langle \tilde{h}_i \rangle_{\backslash i} = \sum_{j} J_{ij} m_j - V_i m_i.
$$
接下来分析variance of the local field,
$$
V_i = \sum_{j,k} J_{ij} J_{ik} (\langle S_j S_k \rangle_{\backslash i}  - \langle S_j \rangle_{\backslash i} \langle S_k \rangle_{\backslash i}). 
$$
上面式子仅在$j=k$时有贡献，这是因为clustering property in single valley(没太看懂)
$$
\frac1N\sum_{j,k} (\langle S_j S_k \rangle  - \langle S_j \rangle \langle S_k \rangle)^2 \to 0, \quad N\to \infty.
$$
以及$J_{ij}$和$J_{ik}$是independent random variables. 因此
$$
V_i \approx \sum_{j} J_{ij}^2 (1 - \langle S_j \rangle_{\backslash i}^2) \approx \sum_{j} J_{ij}^2 (1 - \langle S_j \rangle^2) = \sum_{j} J_{ij}^2 (1 - m_j^2).
$$
结合上面的结果，可以得到TAP equation.

从TAP equation 和 cavity method 也可推导 RS ansatz 的equations of state. (请看原教材)

### Properties of the solution
首先对TAP equation 在spin glass transition point的行为做讨论。假设$m_i$和$h_i$都很小，可以线性化TAP equation:
$$
m_i = \beta\sum_{j} J_{ij} m_j + \beta h_i - \beta^2 J^2 m_i.
$$
对于该线性方程能通过求解symmetric matrix $\mathbf{J}$的eignvalues和eignvectors 来得到解。 为此，我们将$J_{ij}$使用其eignvectors展开:
$$
J_{ij} = \sum_{\lambda} J_{\lambda} \langle i | \lambda \rangle \langle \lambda | j \rangle.
$$

<details class="my-details">
<summary> 一些符号说明</summary>

这里使用了Dirac notation, 其中$|\lambda \rangle$表示eignvector(列向量，$\langle \lambda |$这个是行向量), $\langle i | \lambda \rangle$表示该eignvector 在site $i$上的分量(或理解为内积)。这里可以分解的原因在于$\mathbf{J}$是symmetric matrix，因此能被orthonormal eignvectors 完全对角化。
</details>

定义 $\lambda$-magnetization 和 $\lambda$-field:
$$
m_{\lambda} = \sum_{i} \langle \lambda | i \rangle m_i, \quad h_{\lambda} = \sum_{i} \langle \lambda | i \rangle h_i.
$$
则上述线性方程变为
$$
m_{\lambda} = \beta J_{\lambda} m_{\lambda} + \beta h_{\lambda} - \beta^2 J^2 m_{\lambda}.
$$
因此 $\lambda$-susceptibility 定义为
$$
\chi_{\lambda} = \frac{\partial m_{\lambda}}{\partial h_{\lambda}}\Big|_{h\to 0} = \frac{\beta}{1 - \beta J_{\lambda} + \beta^2 J^2}.
$$
已知random matrix $\mathbf{J}$ 的eignvalue 分布在thermodynamic limit 下服从Wigner semicircle law:
$$
\rho(J_{\lambda}) = \frac{\sqrt{4J^2 - J_{\lambda}^2}}{2\pi J^2} , \quad |J_{\lambda}| \le 2J.
$$
因此从$\chi_{\lambda}$的表达式可以看到，对应最大eignvalue $J_{\lambda} = 2J$的susceptibility 在 $T_f = J$时发散，这意味着发生了transition point 。这与前面replica method 所得到的结果是一致的。 由于是连续谱，因此在$T<T_f$时，存在无穷多个unstable modes。这对应Parisi solution 具有零特征值的marginal stability.

在上一节对local magnetization $m_i^a$出现 multivalley structure 是被视为 TAP的解且使得free energy 极小化的结果。数值分析表明，TAP的解位于稳定性条件的边界上，这让人们联想到Parisi solution 的marginal stability.  然而TAP方程的解一般对应free energy的局部极小值，而非全局极小值。确实满足free energy 最小化条件的解预计只占TAP方程全部解集的一小部分，而该方程具有多达$\mathcal{O}(\text{e}^{aN}),a>0$个解。