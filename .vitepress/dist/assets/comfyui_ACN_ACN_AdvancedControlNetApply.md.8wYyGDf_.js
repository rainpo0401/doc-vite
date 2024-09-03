import{_ as n,c as a,o as e,a4 as s}from"./chunks/framework.DpC1ZpOZ.js";const m=JSON.parse('{"title":"ACN_AdvancedControlNetApply","description":"","frontmatter":{},"headers":[],"relativePath":"comfyui/ACN/ACN_AdvancedControlNetApply.md","filePath":"comfyui/ACN/ACN_AdvancedControlNetApply.md"}'),l={name:"comfyui/ACN/ACN_AdvancedControlNetApply.md"},t=s(`<h1 id="acn-advancedcontrolnetapply" tabindex="-1">ACN_AdvancedControlNetApply <a class="header-anchor" href="#acn-advancedcontrolnetapply" aria-label="Permalink to &quot;ACN_AdvancedControlNetApply&quot;">​</a></h1><ul><li>Class name: AdvancedControlNetApply</li><li>Category: Adv-ControlNet 🛂🅐🅒🅝</li><li>Output node: False</li><li>Repo Ref: <a href="https://github.com/Kosinkadink/ComfyUI-Advanced-ControlNet.git" target="_blank" rel="noreferrer">https://github.com/Kosinkadink/ComfyUI-Advanced-ControlNet.git</a></li></ul><p>AdvancedControlNetApply节点旨在将控制信号应用于神经网络模型。它整合了正向和负向的调节输入以及控制网络，以影响模型的输出。该节点能够调整控制信号的强度和范围，确保对模型行为进行精细和精确的操控。</p><h1 id="input-types" tabindex="-1">Input types <a class="header-anchor" href="#input-types" aria-label="Permalink to &quot;Input types&quot;">​</a></h1><h2 id="required" tabindex="-1">Required <a class="header-anchor" href="#required" aria-label="Permalink to &quot;Required&quot;">​</a></h2><ul><li>positive <ul><li>正向调节输入对于引导模型朝向期望的结果至关重要。它作为模型在生成过程中学习和应用的参考。</li><li>Comfy dtype: CONDITIONING</li><li>Python dtype: Union[Tensor, Iterable[Tuple[str, Dict]]]</li></ul></li><li>negative <ul><li>负向调节输入通过在生成过程中提供应排除的示例，帮助模型避免不希望的输出。</li><li>Comfy dtype: CONDITIONING</li><li>Python dtype: Union[Tensor, Iterable[Tuple[str, Dict]]]</li></ul></li><li>control_net <ul><li>控制网络是一个关键组件，它决定了模型的输出如何被影响。它用于将特定的控制信号应用于模型的不同部分。</li><li>Comfy dtype: CONTROL_NET</li><li>Python dtype: ControlBase</li></ul></li><li>image <ul><li>图像输入为模型提供视觉上下文，这对于生成与提供的视觉信息一致的输出至关重要。</li><li>Comfy dtype: IMAGE</li><li>Python dtype: Tensor</li></ul></li><li>strength <ul><li>强度参数决定了施加在模型上的控制信号的强度。它允许微调控制网络对模型输出的影响。</li><li>Comfy dtype: FLOAT</li><li>Python dtype: float</li></ul></li><li>start_percent <ul><li>开始百分比参数定义了控制信号影响的开始点，允许控制控制效果开始生效的时间。</li><li>Comfy dtype: FLOAT</li><li>Python dtype: float</li></ul></li><li>end_percent <ul><li>结束百分比参数标记了控制信号影响的结束点，使控制效果的持续时间可控。</li><li>Comfy dtype: FLOAT</li><li>Python dtype: float</li></ul></li></ul><h2 id="optional" tabindex="-1">Optional <a class="header-anchor" href="#optional" aria-label="Permalink to &quot;Optional&quot;">​</a></h2><ul><li>mask_optional <ul><li>可选的掩码输入可以用来选择性地将控制信号应用于模型输出的特定区域，提供了一种微调局部控制效果的手段。</li><li>Comfy dtype: MASK</li><li>Python dtype: Optional[Tensor]</li></ul></li><li>model_optional <ul><li>model_optional参数允许提供另一个模型，该模型可以用来进一步细化应用于主模型的控制信号。</li><li>Comfy dtype: MODEL</li><li>Python dtype: Optional[ModelPatcher]</li></ul></li><li>timestep_kf <ul><li>时间步关键帧输入用于定义控制信号的时间结构，允许随时间动态控制。</li><li>Comfy dtype: TIMESTEP_KEYFRAME</li><li>Python dtype: Optional[TimestepKeyframeGroup]</li></ul></li><li>latent_kf_override <ul><li>潜在关键帧覆盖允许定制控制信号对模型潜在空间的影响，提供了一种直接影响模型内部表示的方法。</li><li>Comfy dtype: LATENT_KEYFRAME</li><li>Python dtype: Optional[LatentKeyframeGroup]</li></ul></li><li>weights_override <ul><li>权重覆盖参数允许指定控制网络的自定义权重，允许对控制信号的微调进行更高级别的控制。</li><li>Comfy dtype: CONTROL_NET_WEIGHTS</li><li>Python dtype: Optional[ControlWeights]</li></ul></li></ul><h1 id="output-types" tabindex="-1">Output types <a class="header-anchor" href="#output-types" aria-label="Permalink to &quot;Output types&quot;">​</a></h1><ul><li>positive <ul><li>正向输出代表了应用控制网络后的修改后的调节输入，反映了模型对期望结果的理解。</li><li>Comfy dtype: CONDITIONING</li><li>Python dtype: Union[Tensor, Iterable[Tuple[str, Dict]]]</li></ul></li><li>negative <ul><li>负向输出包括基于控制网络的影响，模型应该避免的修改后的调节输入。</li><li>Comfy dtype: CONDITIONING</li><li>Python dtype: Union[Tensor, Iterable[Tuple[str, Dict]]]</li></ul></li><li>model_opt <ul><li>可选的模型输出在应用控制网络期间提供了模型的任何更新或改进。</li><li>Comfy dtype: MODEL</li><li>Python dtype: Optional[ModelPatcher]</li></ul></li></ul><h1 id="usage-tips" tabindex="-1">Usage tips <a class="header-anchor" href="#usage-tips" aria-label="Permalink to &quot;Usage tips&quot;">​</a></h1><ul><li>Infra type: GPU</li></ul><h1 id="source-code" tabindex="-1">Source code <a class="header-anchor" href="#source-code" aria-label="Permalink to &quot;Source code&quot;">​</a></h1><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>class AdvancedControlNetApply:</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @classmethod</span></span>
<span class="line"><span>    def INPUT_TYPES(s):</span></span>
<span class="line"><span>        return {&#39;required&#39;: {&#39;positive&#39;: (&#39;CONDITIONING&#39;,), &#39;negative&#39;: (&#39;CONDITIONING&#39;,), &#39;control_net&#39;: (&#39;CONTROL_NET&#39;,), &#39;image&#39;: (&#39;IMAGE&#39;,), &#39;strength&#39;: (&#39;FLOAT&#39;, {&#39;default&#39;: 1.0, &#39;min&#39;: 0.0, &#39;max&#39;: 10.0, &#39;step&#39;: 0.01}), &#39;start_percent&#39;: (&#39;FLOAT&#39;, {&#39;default&#39;: 0.0, &#39;min&#39;: 0.0, &#39;max&#39;: 1.0, &#39;step&#39;: 0.001}), &#39;end_percent&#39;: (&#39;FLOAT&#39;, {&#39;default&#39;: 1.0, &#39;min&#39;: 0.0, &#39;max&#39;: 1.0, &#39;step&#39;: 0.001})}, &#39;optional&#39;: {&#39;mask_optional&#39;: (&#39;MASK&#39;,), &#39;timestep_kf&#39;: (&#39;TIMESTEP_KEYFRAME&#39;,), &#39;latent_kf_override&#39;: (&#39;LATENT_KEYFRAME&#39;,), &#39;weights_override&#39;: (&#39;CONTROL_NET_WEIGHTS&#39;,), &#39;model_optional&#39;: (&#39;MODEL&#39;,)}}</span></span>
<span class="line"><span>    RETURN_TYPES = (&#39;CONDITIONING&#39;, &#39;CONDITIONING&#39;, &#39;MODEL&#39;)</span></span>
<span class="line"><span>    RETURN_NAMES = (&#39;positive&#39;, &#39;negative&#39;, &#39;model_opt&#39;)</span></span>
<span class="line"><span>    FUNCTION = &#39;apply_controlnet&#39;</span></span>
<span class="line"><span>    CATEGORY = &#39;Adv-ControlNet 🛂🅐🅒🅝&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    def apply_controlnet(self, positive, negative, control_net, image, strength, start_percent, end_percent, mask_optional: Tensor=None, model_optional: ModelPatcher=None, timestep_kf: TimestepKeyframeGroup=None, latent_kf_override: LatentKeyframeGroup=None, weights_override: ControlWeights=None):</span></span>
<span class="line"><span>        if strength == 0:</span></span>
<span class="line"><span>            return (positive, negative, model_optional)</span></span>
<span class="line"><span>        if model_optional:</span></span>
<span class="line"><span>            model_optional = model_optional.clone()</span></span>
<span class="line"><span>        control_hint = image.movedim(-1, 1)</span></span>
<span class="line"><span>        cnets = {}</span></span>
<span class="line"><span>        out = []</span></span>
<span class="line"><span>        for conditioning in [positive, negative]:</span></span>
<span class="line"><span>            c = []</span></span>
<span class="line"><span>            for t in conditioning:</span></span>
<span class="line"><span>                d = t[1].copy()</span></span>
<span class="line"><span>                prev_cnet = d.get(&#39;control&#39;, None)</span></span>
<span class="line"><span>                if prev_cnet in cnets:</span></span>
<span class="line"><span>                    c_net = cnets[prev_cnet]</span></span>
<span class="line"><span>                else:</span></span>
<span class="line"><span>                    c_net = convert_to_advanced(control_net.copy()).set_cond_hint(control_hint, strength, (start_percent, end_percent))</span></span>
<span class="line"><span>                    if is_advanced_controlnet(c_net):</span></span>
<span class="line"><span>                        c_net.disarm()</span></span>
<span class="line"><span>                        if c_net.require_model:</span></span>
<span class="line"><span>                            if not model_optional:</span></span>
<span class="line"><span>                                raise Exception(f&quot;Type &#39;{type(c_net).__name__}&#39; requires model_optional input, but got None.&quot;)</span></span>
<span class="line"><span>                            c_net.patch_model(model=model_optional)</span></span>
<span class="line"><span>                        if timestep_kf is not None:</span></span>
<span class="line"><span>                            c_net.set_timestep_keyframes(timestep_kf)</span></span>
<span class="line"><span>                        if latent_kf_override is not None:</span></span>
<span class="line"><span>                            c_net.latent_keyframe_override = latent_kf_override</span></span>
<span class="line"><span>                        if weights_override is not None:</span></span>
<span class="line"><span>                            c_net.weights_override = weights_override</span></span>
<span class="line"><span>                        c_net.verify_all_weights()</span></span>
<span class="line"><span>                        if mask_optional is not None:</span></span>
<span class="line"><span>                            mask_optional = mask_optional.clone()</span></span>
<span class="line"><span>                            if len(mask_optional.shape) &lt; 3:</span></span>
<span class="line"><span>                                mask_optional = mask_optional.unsqueeze(0)</span></span>
<span class="line"><span>                            c_net.set_cond_hint_mask(mask_optional)</span></span>
<span class="line"><span>                    c_net.set_previous_controlnet(prev_cnet)</span></span>
<span class="line"><span>                    cnets[prev_cnet] = c_net</span></span>
<span class="line"><span>                d[&#39;control&#39;] = c_net</span></span>
<span class="line"><span>                d[&#39;control_apply_to_uncond&#39;] = False</span></span>
<span class="line"><span>                n = [t[0], d]</span></span>
<span class="line"><span>                c.append(n)</span></span>
<span class="line"><span>            out.append(c)</span></span>
<span class="line"><span>        return (out[0], out[1], model_optional)</span></span></code></pre></div>`,14),p=[t];function i(o,r,c,d,_,u){return e(),a("div",null,p)}const h=n(l,[["render",i]]);export{m as __pageData,h as default};
