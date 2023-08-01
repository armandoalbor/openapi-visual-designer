import { FC } from "react";
import {
  Box,
  Button,
  Grid,
  InputAdornment,
  TextField,
  ToolbarProps,
} from "@mui/material";
import {
  DataGrid,
  GridColDef,
  GridDensity,
  GridRenderCellParams,
  GridColumnGroupingModel,
  GridRowId,
} from "@mui/x-data-grid";
import { Delete, Edit, SearchOutlined } from "@mui/icons-material";
import { useTranslation } from "@/hooks";
import { TableActions, TableAction } from "./TableActions";

interface Props {
  columns: GridColDef[];
  rows: any[];
  multiselect?: boolean;
  density?: GridDensity;
  customActions?: TableAction[];
  loading?: boolean;
  columnGroupingModel?: GridColumnGroupingModel;
  entityName?: string;
  onCreate?: () => void;
  onEdit?: (id: string) => void;
  onDelete?: (id: string) => void;
  onDeleteMany?: (ids: string[]) => void;
  onSearch?: (query: string) => void;
  onRowSelectionChange?: (selectedIds: GridRowId[]) => void;
  onExportExcel?: () => void;
  onExportPdf?: () => void;
  onExportImage?: () => void;
}

export const Table: FC<Props> = ({
  columns,
  rows,
  onEdit,
  onDelete,
  customActions,
  multiselect,
  density = "standard",
  loading,
  columnGroupingModel,
  entityName,
  onCreate,
  onSearch,
  onRowSelectionChange,
}) => {
  const { t } = useTranslation();

  const actions: TableAction[] = [
    ...(onEdit
      ? [
          {
            tooltip: t("components.table.edit"),
            icon: <Edit />,
            onClick: onEdit,
          },
        ]
      : []),
    ...(onDelete
      ? [
          {
            tooltip: t("components.table.delete"),
            icon: <Delete color="error" />,
            onClick: onDelete,
          },
        ]
      : []),
    ...(customActions ? customActions : []),
  ];

  const colums: GridColDef[] = [
    ...columns,
    ...(actions.length > 0
      ? [
          {
            field: "id",
            headerName: t("components.table.actions"),
            width: actions.length > 3 ? actions.length * 48 : 144,
            sortable: false,
            renderCell: ({ row }: GridRenderCellParams) => {
              return <TableActions rowId={row.id} actions={actions} />;
            },
          },
        ]
      : []),
  ];

  const searchIsEnabled = !!onSearch;

  return (
    <Grid item xs={12} sx={{ mt: 2, width: "100%" }}>
      <DataGrid
        sx={{ px: searchIsEnabled ? 3 : undefined }}
        rows={rows}
        columns={colums}
        disableColumnFilter
        disableRowSelectionOnClick
        pageSizeOptions={[5, 10, 15, 20, 25]}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 10,
            },
          },
        }}
        loading={loading}
        density={density}
        columnHeaderHeight={60}
        checkboxSelection={multiselect}
        onRowSelectionModelChange={
          onRowSelectionChange
            ? (newRowSelectionModel) => {
                onRowSelectionChange(newRowSelectionModel);
              }
            : undefined
        }
        experimentalFeatures={
          columnGroupingModel ? { columnGrouping: true } : undefined
        }
        columnGroupingModel={columnGroupingModel}
        slots={{
          toolbar: searchIsEnabled
            ? (props: ToolbarProps) => (
                <>
                  <Box
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                    sx={{ py: 2.5 }}
                  >
                    <TextField
                      id="time"
                      type="text"
                      placeholder={t("catalog.actions.search", {
                        entityName: entityName,
                      })}
                      sx={{ width: 300 }}
                      size="small"
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <SearchOutlined />
                          </InputAdornment>
                        ),
                      }}
                    />

                    {onCreate && (
                      <Button size="medium" color="primary" onClick={onCreate}>
                        {t("catalog.actions.create", {
                          entityName: entityName,
                        })}
                      </Button>
                    )}
                  </Box>
                </>
              )
            : undefined,
        }}
      />
    </Grid>
  );
};
