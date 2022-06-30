import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class GoogleDriveWarning extends StatelessWidget {
  const GoogleDriveWarning({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.asset('icons/GoogleDriveWarning.svg');
}
