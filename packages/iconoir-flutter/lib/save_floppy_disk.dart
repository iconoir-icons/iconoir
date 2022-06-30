import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class SaveFloppyDisk extends StatelessWidget {
  const SaveFloppyDisk({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.asset('icons/SaveFloppyDisk.svg');
}
