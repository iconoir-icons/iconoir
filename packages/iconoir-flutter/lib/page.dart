import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class Page extends StatelessWidget {
  const Page({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.asset('icons/Page.svg');
}
