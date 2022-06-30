import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class LockedWindow extends StatelessWidget {
  const LockedWindow({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.asset('icons/LockedWindow.svg');
}
