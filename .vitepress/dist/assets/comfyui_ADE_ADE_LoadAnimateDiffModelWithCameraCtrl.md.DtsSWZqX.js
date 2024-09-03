import{_ as i,c as s,o as a,a4 as t}from"./chunks/framework.DpC1ZpOZ.js";const c=JSON.parse('{"title":"Load AnimateDiff+CameraCtrl Model 🎭🅐🅓②","description":"","frontmatter":{},"headers":[],"relativePath":"comfyui/ADE/ADE_LoadAnimateDiffModelWithCameraCtrl.md","filePath":"comfyui/ADE/ADE_LoadAnimateDiffModelWithCameraCtrl.md"}'),n={name:"comfyui/ADE/ADE_LoadAnimateDiffModelWithCameraCtrl.md"},l=t(`<h1 id="load-animatediff-cameractrl-model-🎭🅐🅓2" tabindex="-1">Load AnimateDiff+CameraCtrl Model 🎭🅐🅓② <a class="header-anchor" href="#load-animatediff-cameractrl-model-🎭🅐🅓2" aria-label="Permalink to &quot;Load AnimateDiff+CameraCtrl Model 🎭🅐🅓②&quot;">​</a></h1><h2 id="documentation" tabindex="-1">Documentation <a class="header-anchor" href="#documentation" aria-label="Permalink to &quot;Documentation&quot;">​</a></h2><ul><li>Class name: ADE_LoadAnimateDiffModelWithCameraCtrl</li><li>Category: Animate Diff 🎭🅐🅓/② Gen2 nodes ②/CameraCtrl</li><li>Output node: False</li><li>Repo Ref: <a href="https://github.com/Kosinkadink/ComfyUI-AnimateDiff-Evolved.git" target="_blank" rel="noreferrer">https://github.com/Kosinkadink/ComfyUI-AnimateDiff-Evolved.git</a></li></ul><p>此节点旨在加载具有集成摄像机控制功能的AnimateDiff模型，使得可以直接在AnimateDiff框架内应用摄像机运动和调整。它有助于将动态摄像机控制参数整合到AnimateDiff模型中，从而增强动画过程并实现更复杂的视觉效果。</p><h2 id="input-types" tabindex="-1">Input types <a class="header-anchor" href="#input-types" aria-label="Permalink to &quot;Input types&quot;">​</a></h2><h3 id="required" tabindex="-1">Required <a class="header-anchor" href="#required" aria-label="Permalink to &quot;Required&quot;">​</a></h3><ul><li>model_name <ul><li>指定要加载的运动模型的名称。它对于识别将添加摄像机控制功能的特定AnimateDiff模型至关重要。</li><li>Comfy dtype: COMBO[STRING]</li><li>Python dtype: str</li></ul></li><li>camera_ctrl <ul><li>定义要注入到AnimateDiff模型中的摄像机控制参数。此输入对于定制动画中的摄像机运动和效果至关重要。</li><li>Comfy dtype: COMBO[STRING]</li><li>Python dtype: str</li></ul></li></ul><h3 id="optional" tabindex="-1">Optional <a class="header-anchor" href="#optional" aria-label="Permalink to &quot;Optional&quot;">​</a></h3><ul><li>ad_settings <ul><li>AnimateDiff模型的可选设置，允许进一步定制动画过程。</li><li>Comfy dtype: AD_SETTINGS</li><li>Python dtype: dict</li></ul></li></ul><h2 id="output-types" tabindex="-1">Output types <a class="header-anchor" href="#output-types" aria-label="Permalink to &quot;Output types&quot;">​</a></h2><ul><li>MOTION_MODEL <ul><li>Comfy dtype: MOTION_MODEL_ADE</li><li>集成了摄像机控制功能的修改后的AnimateDiff模型，准备用于动画任务。</li><li>Python dtype: MotionModel</li></ul></li></ul><h2 id="usage-tips" tabindex="-1">Usage tips <a class="header-anchor" href="#usage-tips" aria-label="Permalink to &quot;Usage tips&quot;">​</a></h2><ul><li>Infra type: CPU</li><li>Common nodes: unknown</li></ul><h2 id="source-code" tabindex="-1">Source code <a class="header-anchor" href="#source-code" aria-label="Permalink to &quot;Source code&quot;">​</a></h2><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> LoadAnimateDiffModelWithCameraCtrl</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    @</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">classmethod</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    def</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> INPUT_TYPES</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(s):</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">            &quot;required&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">                &quot;model_name&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: (get_available_motion_models(),),</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">                &quot;camera_ctrl&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: (get_available_motion_models(),),</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            },</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">            &quot;optional&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">                &quot;ad_settings&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: (</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;AD_SETTINGS&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,),</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    RETURN_TYPES</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;MOTION_MODEL_ADE&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,)</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    RETURN_NAMES</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;MOTION_MODEL&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,)</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    CATEGORY</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;Animate Diff 🎭🅐🅓/② Gen2 nodes ②/CameraCtrl&quot;</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    FUNCTION</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;load_camera_ctrl&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    def</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> load_camera_ctrl</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(self, model_name: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">str</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, camera_ctrl: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">str</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, ad_settings: AnimateDiffSettings</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">None</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">):</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        loaded_motion_model </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> load_motion_module_gen2(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">model_name</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">model_name, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">motion_model_settings</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">ad_settings)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        inject_camera_encoder_into_model(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">motion_model</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">loaded_motion_model, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">camera_ctrl_name</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">camera_ctrl)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (loaded_motion_model,)</span></span></code></pre></div>`,15),e=[l];function h(p,k,o,r,d,E){return a(),s("div",null,e)}const y=i(n,[["render",h]]);export{c as __pageData,y as default};