/**
 *
 * MerchantList
 *
 */

import React from 'react';

import { MERCHANT_STATUS } from '../../../constants';
import { formatDate } from '../../../utils/date';
import Button from '../../Common/Button';
import { CheckIcon, XIcon, RefreshIcon, TrashIcon } from '../../Common/Icon';

const MerchantList = props => {
  const {
    merchants,
    approveMerchant,
    rejectMerchant,
    deleteMerchant,
    disableMerchant
  } = props;

  const renderMerchantPopover = merchant => (
    <div className='p-2'>
      <p className='text-gray text-14'>
        {merchant.isActive
          ? "Отключение аккаунта продавца отключит бренд продавца и доступ к аккаунту."
          : 'Включение аккаунта продавца восстановит доступ к аккаунту продавца.'}
      </p>
      <Button
        variant='dark'
        size='sm'
        className='w-100'
        text={merchant.isActive ? 'Отключить продавца' : 'Включить продавца'}
        onClick={() => disableMerchant(merchant, !merchant.isActive)}
      />
    </div>
  );

  return (
    <div className='merchant-list'>
      {merchants.map((merchant, index) => (
        <div key={index} className='merchant-box'>
          <div className='mb-3 p-4'>
            <label className='text-black'>Бизнес</label>
            <p className='fw-medium text-truncate'>{merchant.business}</p>
            <label className='text-black'>Бренд</label>
            <p className='text-truncate'>{merchant.brandName}</p>
            <label className='text-black'>Имя</label>
            <p className='text-truncate'>{merchant.name}</p>
            <label className='text-black'>Электронная почта</label>
            <p className='text-truncate'>
              {merchant.email ? merchant.email : 'Н/Д'}
            </p>
            <label className='text-black'>Номер телефона</label>
            <p>{merchant.phoneNumber}</p>
            <label className='text-black'>Дата запроса</label>
            <p>{formatDate(merchant.created)}</p>

            <hr />

            {merchant.status === MERCHANT_STATUS.Approved ? (
              <>
                <div className='d-flex flex-row justify-content-between align-items-center mx-0'>
                  <div className='d-flex flex-row mx-0'>
                    <CheckIcon className='text-green' />
                    <p className='ml-2 mb-0'>Одобрено</p>
                  </div>

                  <div className='d-flex flex-row align-items-center mx-0'>
                    <Button
                      className='ml-3'
                      size='lg'
                      round={20}
                      icon={<TrashIcon width={20} />}
                      tooltip={true}
                      tooltipContent='Удалить'
                      id={`delete-${merchant._id}`}
                      onClick={() => deleteMerchant(merchant)}
                    />
                  </div>
                </div>
                <Button
                  className='w-100 mt-3'
                  size='sm'
                  text={
                    merchant.isActive ? 'Отключить продавца' : 'Включить продавца'
                  }
                  popover={true}
                  popoverTitle={`Вы уверены, что хотите ${
                    merchant.isActive ? 'отключить' : 'включить'
                  } аккаунт продавца ${merchant.name}?`}
                  popoverContent={renderMerchantPopover(merchant)}
                />
              </>
            ) : merchant.status === MERCHANT_STATUS.Rejected ? (
              <>
                <div className='d-flex flex-row justify-content-between align-items-center mx-0'>
                  <Button
                    size='lg'
                    round={20}
                    icon={<RefreshIcon width={18} className='text-primary' />}
                    tooltip={true}
                    tooltipContent='Переодобрить'
                    id={`re-approve-${merchant._id}`}
                    onClick={() => approveMerchant(merchant)}
                  />
                  <div className='d-flex flex-row align-items-center mx-0'>
                    <Button
                      className='ml-3'
                      size='lg'
                      round={20}
                      icon={<TrashIcon width={20} />}
                      tooltip={true}
                      tooltipContent='Удалить'
                      id={`delete-${merchant._id}`}
                      onClick={() => deleteMerchant(merchant)}
                    />
                  </div>
                </div>
              </>
            ) : merchant.email ? (
              <div className='d-flex flex-row justify-content-between align-items-center mx-0'>
                <div className='d-flex flex-row mx-0'>
                  <Button
                    size='lg'
                    round={20}
                    icon={<CheckIcon width={18} className='text-green' />}
                    tooltip={true}
                    tooltipContent='Одобрить'
                    id={`approve-${merchant._id}`}
                    onClick={() => approveMerchant(merchant)}
                  />
                  <Button
                    className='ml-2'
                    size='lg'
                    round={20}
                    icon={<XIcon width={20} />}
                    tooltip={true}
                    tooltipContent='Отклонить'
                    id={`reject-${merchant._id}`}
                    onClick={() => rejectMerchant(merchant)}
                  />
                </div>
                <div className='d-flex flex-row align-items-center mx-0'>
                  <Button
                    className='ml-3'
                    size='lg'
                    round={20}
                    icon={<TrashIcon width={20} />}
                    tooltip={true}
                    tooltipContent='Удалить'
                    id={`delete-${merchant._id}`}
                    onClick={() => deleteMerchant(merchant)}
                  />
                </div>
              </div>
            ) : (
              <>
                <p className='text-truncate'>
                  У продавца нет электронной почты. Позвоните по номеру
                  <a
                    href={`tel:${merchant.phoneNumber}`}
                    className='text-primary'
                  >
                    {' '}
                    {merchant.phoneNumber}
                  </a>
                </p>
                <Button
                  size='lg'
                  round={20}
                  icon={<TrashIcon width={20} />}
                  tooltip={true}
                  tooltipContent='Удалить'
                  id={`delete-${merchant._id}`}
                  onClick={() => deleteMerchant(merchant)}
                />
              </>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default MerchantList;
