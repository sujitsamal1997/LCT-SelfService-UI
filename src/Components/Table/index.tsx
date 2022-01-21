import * as React from "react";
import {
  LuiMaterialTable,
  LuiToggleButtonGroup,
  Tokens,
} from "@jda/lui-common-component-library";
import Box from "@material-ui/core/Box";
// import {boolean} from "@storybook/addon-knobs";
import { data } from "../../utils/mock";
import { makeStyles, Theme, createStyles, IconButton } from "@material-ui/core";
import {
  SignPlus,
  Edit,
  Copy,
  Search,
  Download,
} from "@jda/lui-common-icon-library";

const Table: React.FC = () => {
  const useStyles = makeStyles((theme: Theme) =>
    createStyles({
      priorityBarSettings: {
        position: "relative",
        height: theme.spacing(4),
        width: theme.spacing(0.5),
      },
      toolbar: {
        display: "flex",
        justifyContent: "space-between",
        backgroundColor:
          Tokens.colors[`${theme.palette.type}Theme`]
            .materialTableToolbarBackground,
      },
      leftZone: {
        width: "30%",
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        paddingLeft: "10px",
      },
      middleZone: {
        width: "30%",
        display: "flex",
        justifyContent: "center",
      },
      rightZone: {
        width: "30%",
        display: "flex",
        justifyContent: "flex-end",
      },
    })
  );

  const CustomToolbar = () => {
    const classes = useStyles();

    return (
      <div className={classes.toolbar}>
        <div className={classes.leftZone}>
          <IconButton aria-label="Add">
            <SignPlus />
          </IconButton>
          <IconButton aria-label="Edit">
            <Edit />
          </IconButton>
          <IconButton aria-label="Copy">
            <Copy />
          </IconButton>
        </div>
        <div className={classes.middleZone}></div>
        <div className={classes.rightZone}>
          <IconButton aria-label="Search">
            <Search />
          </IconButton>
          <IconButton aria-label="Download">
            <Download />
          </IconButton>
        </div>
      </div>
    );
  };

  const columns = [
    {
      title: "Product Class",
      field: "productClass",
    },
    {
      title: "Order ID",
      field: "orderId",
    },
    {
      title: "Trans Mod",
      field: "transMod",
    },
    {
      title: "Category",
      field: "category",
    },
    {
      title: "Priority",
      field: "priority",
    },
    {
      title: "Delayed",
      field: "delayed",
    },
    {
      title: "SKU",
      field: "sku",
    },
    {
      title: "Item Cost",
      field: "itemCost",
    },
  ];

  const onRowSelection = (selected: any) => {
    console.log("Selected", selected);
  };

  const isToolbarActive = true;
  const isCustomToolbar = true;

  const materialTableOptions = React.useMemo(
    () => ({
      toolbar: isToolbarActive,
      sorting: true,
    }),
    [isToolbarActive]
  );

  const materialTableComponents = React.useMemo(() => {
    if (isCustomToolbar) {
      return {
        Toolbar: () => <CustomToolbar />,
      };
    }
    return {};
  }, [isCustomToolbar]);

  const tableData = data.map((item) => Object.assign({}, item));

  return (
    <Box>
      <LuiMaterialTable
        id="material-table"
        data={tableData}
        materialTableProps={{
          options: materialTableOptions,
          onSelectionChange: onRowSelection,
          components: materialTableComponents,
        }}
        showSelection={true}
        selectionColumnPosition={1}
        onSelectionChange={onRowSelection}
        columns={columns}
      />
    </Box>
  );
};

export default Table;
