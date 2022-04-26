import styled from "styled-components";
import {Box} from "@strapi/design-system/Box";
import {CKEditor} from "@ckeditor/ckeditor5-react";
import ClassicEditor from "strapi-ckeditor-build";
import PropTypes from "prop-types";

const Wrapper = styled(Box)`
  .ck-editor__main {
    min-height: ${200 / 16}em;

    > div {
      min-height: ${200 / 16}em;
    }
  }
`;

const Editor = ({onChange, name, value, disabled, config}) => {
  return (
    <Wrapper>
      <CKEditor
        editor={ClassicEditor}
        disabled={disabled}
        config={config}
        data={value || ""}
        onReady={(editor) => editor.setData(value || "")}
        onChange={(event, editor) => {
          const data = editor.getData();
          onChange({target: {name, value: data}});
        }}
      />
    </Wrapper>
  );
};

Editor.defaultProps = {
  value:    "",
  disabled: false
};

Editor.propTypes = {
  onChange: PropTypes.func.isRequired,
  name:     PropTypes.string.isRequired,
  value:    PropTypes.string,
  disabled: PropTypes.bool,
  config:   PropTypes.object
};

export default Editor;
