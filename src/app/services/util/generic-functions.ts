import { PrimaryEntity, ServiceMaker } from '../maker/service-maker';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { YesNoModalComponent, YesNoModalConfig } from '../../shared/yes-no-modal/yes-no-modal.component';

export async function defaultRemove<D extends PrimaryEntity>(service: ServiceMaker<D>,
                                                             data: D,
                                                             modalService: NgbModal): Promise<boolean> {
  const modalRef = modalService.open(YesNoModalComponent, {size: 'sm', centered: true});
  let yesNoModalConfig: YesNoModalConfig = new YesNoModalConfig();
  yesNoModalConfig = {...yesNoModalConfig, message: 'Deseja realmente remover este registro?'};
  modalRef.componentInstance.yesNoModalConfig = yesNoModalConfig;

  const result = await modalRef.result;
  if (result) {
    return service.delete(data.id)
      .then(() => Promise.resolve(true))
      .catch((err) => Promise.reject(err));
  } else {
    return Promise.reject(false);
  }
}
