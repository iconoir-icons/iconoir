import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class PackageLock extends StatelessWidget {
  const PackageLock({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.asset('icons/PackageLock.svg');
}
