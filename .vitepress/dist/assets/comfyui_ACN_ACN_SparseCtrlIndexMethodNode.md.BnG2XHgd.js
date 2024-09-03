import{_ as s,c as a,o as e,a4 as n}from"./chunks/framework.DpC1ZpOZ.js";const _=JSON.parse('{"title":"ACN_SparseCtrlIndexMethodNode","description":"","frontmatter":{},"headers":[],"relativePath":"comfyui/ACN/ACN_SparseCtrlIndexMethodNode.md","filePath":"comfyui/ACN/ACN_SparseCtrlIndexMethodNode.md"}'),t={name:"comfyui/ACN/ACN_SparseCtrlIndexMethodNode.md"},p=n(`<h1 id="acn-sparsectrlindexmethodnode" tabindex="-1">ACN_SparseCtrlIndexMethodNode <a class="header-anchor" href="#acn-sparsectrlindexmethodnode" aria-label="Permalink to &quot;ACN_SparseCtrlIndexMethodNode&quot;">​</a></h1><ul><li>Class name: SparseIndexMethodNode</li><li>Category: Adv-ControlNet 🛂🅐🅒🅝/SparseCtrl</li><li>Output node: False</li><li>Repo Ref: <a href="https://github.com/Kosinkadink/ComfyUI-Advanced-ControlNet.git" target="_blank" rel="noreferrer">https://github.com/Kosinkadink/ComfyUI-Advanced-ControlNet.git</a></li></ul><p>该节点用于通过提供一系列唯一的索引来检索稀疏控制网络的方法。它确保索引是有效的整数，并用于引用更大数据集或结构中的特定元素。</p><h1 id="input-types" tabindex="-1">Input types <a class="header-anchor" href="#input-types" aria-label="Permalink to &quot;Input types&quot;">​</a></h1><h2 id="required" tabindex="-1">Required <a class="header-anchor" href="#required" aria-label="Permalink to &quot;Required&quot;">​</a></h2><ul><li>indexes <ul><li>“indexes”参数是一个由逗号分隔的整数字符串，用于唯一标识数据集中的元素。它对节点的操作至关重要，因为它直接影响到哪些元素被选中进行处理。</li><li>Comfy dtype: STRING</li><li>Python dtype: str</li></ul></li></ul><h1 id="output-types" tabindex="-1">Output types <a class="header-anchor" href="#output-types" aria-label="Permalink to &quot;Output types&quot;">​</a></h1><ul><li>method <ul><li>输出的&#39;method&#39;是SparseIndexMethod的一个实例，根据提供的索引定制。它代表了SparseIndexMethodNode的核心功能，使得在稀疏控制网络中选择和处理特定元素成为可能。</li><li>Comfy dtype: SPARSE_METHOD</li><li>Python dtype: SparseIndexMethod</li></ul></li></ul><h1 id="usage-tips" tabindex="-1">Usage tips <a class="header-anchor" href="#usage-tips" aria-label="Permalink to &quot;Usage tips&quot;">​</a></h1><ul><li>Infra type: CPU</li></ul><h1 id="source-code" tabindex="-1">Source code <a class="header-anchor" href="#source-code" aria-label="Permalink to &quot;Source code&quot;">​</a></h1><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>class SparseIndexMethodNode:</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @classmethod</span></span>
<span class="line"><span>    def INPUT_TYPES(s):</span></span>
<span class="line"><span>        return {&#39;required&#39;: {&#39;indexes&#39;: (&#39;STRING&#39;, {&#39;default&#39;: &#39;0&#39;})}}</span></span>
<span class="line"><span>    RETURN_TYPES = (&#39;SPARSE_METHOD&#39;,)</span></span>
<span class="line"><span>    FUNCTION = &#39;get_method&#39;</span></span>
<span class="line"><span>    CATEGORY = &#39;Adv-ControlNet 🛂🅐🅒🅝/SparseCtrl&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    def get_method(self, indexes: str):</span></span>
<span class="line"><span>        idxs = []</span></span>
<span class="line"><span>        unique_idxs = set()</span></span>
<span class="line"><span>        str_idxs = [x.strip() for x in indexes.strip().split(&#39;,&#39;)]</span></span>
<span class="line"><span>        for str_idx in str_idxs:</span></span>
<span class="line"><span>            try:</span></span>
<span class="line"><span>                idx = int(str_idx)</span></span>
<span class="line"><span>                if idx in unique_idxs:</span></span>
<span class="line"><span>                    raise ValueError(f&quot;&#39;{idx}&#39; is duplicated; indexes must be unique.&quot;)</span></span>
<span class="line"><span>                idxs.append(idx)</span></span>
<span class="line"><span>                unique_idxs.add(idx)</span></span>
<span class="line"><span>            except ValueError:</span></span>
<span class="line"><span>                raise ValueError(f&quot;&#39;{str_idx}&#39; is not a valid integer index.&quot;)</span></span>
<span class="line"><span>        if len(idxs) == 0:</span></span>
<span class="line"><span>            raise ValueError(f&#39;No indexes were listed in Sparse Index Method.&#39;)</span></span>
<span class="line"><span>        return (SparseIndexMethod(idxs),)</span></span></code></pre></div>`,12),i=[p];function l(d,r,o,c,u,h){return e(),a("div",null,i)}const f=s(t,[["render",l]]);export{_ as __pageData,f as default};
